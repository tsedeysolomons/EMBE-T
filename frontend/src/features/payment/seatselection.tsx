import { useState, useEffect } from "react";
import { Card, CardContent } from "../../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { Button } from "../../components/ui/button";
import { useSelector } from "react-redux";
import {
  selectClassType,
  selectTrain,
  setClassType,
} from "../searchResult/searchSlice";
import {
  useCreateBookingMutation,
  useGetSeatNumbersQuery,
} from "./bookApiSlice";
import { useDispatch } from "react-redux";
import { selectUser, setReservationInfo } from "./bookSlice";

interface Seat {
  id: number;
  isSelected: boolean;
  isDisabled: boolean;
}

function SeatButton({ seat, onClick }: { seat: Seat; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      disabled={seat.isDisabled}
      className={`
        relative aspect-square p-2 rounded-lg transition-colors
        ${
          seat.isSelected
            ? "bg-primary text-primary-foreground"
            : "bg-primary/10 hover:bg-primary/20"
        }
        ${seat.isDisabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
      aria-label={`Seat ${seat.id}`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-medium">{seat.id}</span>
      </div>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-full h-full opacity-30"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M4 18V8C4 5.79086 5.79086 4 8 4H16C18.2091 4 20 5.79086 20 8V18M4 18V20H20V18M4 18H20"
          strokeLinecap="round"
        />
        <path d="M8 8H16" strokeLinecap="round" />
        <path d="M8 12H16" strokeLinecap="round" />
      </svg>
    </button>
  );
}

function HardSeatSection({
  seats,
  onSeatClick,
}: {
  seats: Seat[];
  onSeatClick: (seat: Seat) => void;
}) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Hard Seat</h2>
      <div className="grid grid-cols-8 gap-2">
        {seats.map((seat) => (
          <SeatButton
            key={seat.id}
            seat={seat}
            onClick={() => onSeatClick(seat)}
          />
        ))}
      </div>
    </div>
  );
}

function HardSleepSection({
  seats,
  onSeatClick,
}: {
  seats: Seat[];
  onSeatClick: (seat: Seat) => void;
}) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Hard Sleep</h2>
      <div className="grid grid-cols-2 gap-4">
        {[0, 1].map((section) => (
          <div
            key={section}
            className="border-2 border-primary/20 rounded-lg p-4"
          >
            <div className="grid grid-cols-3 gap-2">
              {seats.slice(section * 26, (section + 1) * 26).map((seat) => (
                <SeatButton
                  key={seat.id}
                  seat={seat}
                  onClick={() => onSeatClick(seat)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SeatSelection({
  handleNext,
}: {
  handleNext: (step: number) => void;
}) {
  const { capacity, id } = useSelector(selectTrain);

  const dispatch = useDispatch();
  const classType = useSelector(selectClassType);

  const user = useSelector(selectUser);

 

  const { data: seatData, error } = useGetSeatNumbersQuery(id);

  const [seats, setSeats] = useState<Seat[]>([]);
  const [selectedSeat, setSelectedSeat] = useState<number | null>(null);

  useEffect(() => {
    if (seatData) {
      setSeats(
        Array.from({ length: capacity }, (_, index) => ({
          id: index + 1,
          isSelected: false,
          isDisabled: seatData.takenSets.includes(index + 1),
        }))
      );
    }
  }, [capacity, seatData]);

  useEffect(() => {
    handleClassChange(selectedSeat! > 48 ? "HardSleep" : "HardSeat");
  }, [selectedSeat]);

  const handleSeatClick = (clickedSeat: Seat) => {
    if (clickedSeat.isDisabled) return;

    setSeats((currentSeats) =>
      currentSeats.map((seat) => ({
        ...seat,
        isSelected: seat.id === clickedSeat.id && seat.id !== selectedSeat,
      }))
    );

    setSelectedSeat((current) =>
      current === clickedSeat.id ? null : clickedSeat.id
    );
  };

  const hardSeats = seats.slice(0, 48);
  const hardSleepSeats = seats.slice(48);

  const [createBooking, { isLoading }] = useCreateBookingMutation();

  const handleClassChange = (classType: string) => {
    dispatch(setClassType({ classType }));
  };

  const handleSubmit = async () => {
    const newBooking = await createBooking({
      newBooking: {
        passengerId: String(user?.id),
        trainId: id,
        setNo: selectedSeat!,
        classType,
      },
    });

    if (newBooking) {
      handleNext(4);

      dispatch(
        setReservationInfo({
          reservation: newBooking,
        })
      );
    }
  };

  return (
    <div>
      <Card className="w-full max-w-4xl mx-auto bg-white">
        <CardContent className="p-6">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold mb-2">SELECT YOUR SEAT</h1>
            <p className="text-gray-600">
              {selectedSeat
                ? `You have selected seat ${selectedSeat}`
                : "Please select a seat"}
            </p>
          </div>

          <Tabs defaultValue="hardseat" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="hardseat">Hard Seat</TabsTrigger>
              <TabsTrigger value="hardsleep">Hard Sleep</TabsTrigger>
            </TabsList>
            <TabsContent value="hardseat">
              <HardSeatSection
                seats={hardSeats}
                onSeatClick={handleSeatClick}
              />
            </TabsContent>
            <TabsContent value="hardsleep">
              <HardSleepSection
                seats={hardSleepSeats}
                onSeatClick={handleSeatClick}
              />
            </TabsContent>
          </Tabs>

          <div className="mt-6 flex gap-4 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-primary/10 rounded" />
              <span className="text-sm">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-primary rounded" />
              <span className="text-sm">Selected</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-300 rounded" />
              <span className="text-sm">Allready-Selected</span>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-between pt-6">
        <Button
          variant="outline"
          className="border-2 hover:bg-slate-50"
          onClick={() => handleNext(4)}
        >
          Back to previous page
        </Button>
        <Button
          className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-md"
          onClick={handleSubmit}
          disabled={!selectedSeat}
        >
          Go-To Pay
        </Button>
      </div>
    </div>
  );
}

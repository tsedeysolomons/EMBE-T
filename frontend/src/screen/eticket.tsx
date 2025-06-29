import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { QRCodeSVG } from "qrcode.react";
import { format } from "date-fns";
import { useParams } from "react-router-dom";

interface TicketData {
  id: number;
  ticketNo: number;
  trainId: string;
  setNo: string;
  class: string;
  journeyDate: string;
  departureStatus: string;
  ticketPrice: number;
  passenger: {
    name: string;
  };
}

const ETicket = () => {
  const [ticketData, setTicketData] = useState<TicketData | null>(null);
  const [loading, setLoading] = useState(true);
  const { reservationId } = useParams<{ reservationId: string }>();
  const [error, setError] = useState<string | null>(null);

  const fetchTicketData = async (id: string) => {
    try {
      const response = await fetch(`/api/eticket/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch ticket: ${response.statusText}`);
      }

      const result = await response.json();
      setTicketData(result);
      setError(null);
    } catch (error) {
      console.error("Error fetching ticket:", error);
      setError(
        error instanceof Error ? error.message : "Failed to fetch ticket"
      );
    } finally {
      setLoading(false);
    }
  };

  const createTicket = async (id: string) => {
    try {
      setLoading(true);
      const response = await fetch("/api/eticket/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reservationId: id }),
      });

      if (!response.ok) {
        // If ticket exists (409 status), try fetching it instead
        if (response.status === 409) {
          await fetchTicketData(id);
          return;
        }
        throw new Error(`Failed to create ticket: ${response.statusText}`);
      }

      const result = await response.json();
      setTicketData(result.eticket);
      setError(null);
    } catch (error) {
      console.error("Error creating ticket:", error);
      setError(
        error instanceof Error ? error.message : "Failed to create ticket"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (reservationId) {
      if (reservationId) {
        createTicket(reservationId);
      }
    }
  }, [reservationId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 p-4 text-center">
        <p>{error}</p>
        <button
          onClick={() => reservationId && createTicket(reservationId)}
          className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!ticketData) {
    return <p className="text-center p-4">No ticket data found</p>;
  }

  const {
    ticketNo,
    trainId,
    setNo,
    class: ticketClass,
    journeyDate,
    departureStatus,
    ticketPrice,
  } = ticketData;

  const qrCodeData = JSON.stringify({
    ticketNo,
    trainId,
  });

  return (
    <Card className="w-full max-w-2xl bg-white">
      <CardHeader className="bg-[#1B5E20] text-white">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold">
              E-Digital E-Ticket
            </CardTitle>
            <p className="text-lg">EthiSeat</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-semibold">ETB{ticketPrice}</p>
            <p className="text-sm">ETB</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-8 p-6">
        <div className="space-y-6">
          <QRCodeSVG value={qrCodeData} size={150} />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">
              Train Details
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">ID:</span>
                <span>{trainId}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Departure:</span>
                <span>{format(new Date(journeyDate), "MM/dd/yy")}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Class:</span>
                <span>{ticketClass}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Status:</span>
                <span>{departureStatus}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="relative h-48 w-full">
            <img
              src="/images/train1.jpg" // Update this path to match your public directory structure
              alt="E-Ticket Preview"
              className="object-cover rounded-lg"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">
              Passenger Details
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Seat:</span>
                <span>{setNo}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Class:</span>
                <span>{ticketClass}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 mt-4">
          <div className="w-full flex justify-center">
            <div className="text-center">
              <div className="h-12 w-64 bg-black mb-2" />
              <p className="font-mono">
                ETB{ticketNo.toString().padStart(9, "0")}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ETicket;

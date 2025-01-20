import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TrainIcon from "@mui/icons-material/Train";

export default function Options({
  handleNext,
}: {
  handleNext: (step: number) => void;
}) {
  return (
    <div className="w-full px-6 py-4">
      {/* Header */}
      <div className="bg-white shadow-sm mb-6">
        <div className="w-full px-6 py-3">
          <div className="flex items-center justify-between">
            <img
              src={
                "https://www.chinadaily.com.cn/world/images/attachement/jpg/site1/20161005/eca86bd9d543195e77c102.jpg"
              }
              alt="Emirates Logo"
              width={130}
              height={40}
              className="object-contain"
            />
            <h2 className="text-4xl font-bold font-serif   text-center text-red-600 mt-8 mb-4">
              Ethiopian Midr Babur
            </h2>
          </div>
        </div>
      </div>

      {/* Flight Info */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-lg mb-2">
          <span>Addis Ababa (ADD)</span>
          <TrainIcon className="h-5 w-5 rotate-90" />
          <span>Djibuti (DBT)</span>
        </div>
        <div className="flex gap-4 text-sm text-gray-600">
          <span>One way</span>
          <span>•</span>
          <span>1 passenger</span>
        </div>
        <div className="flex justify-end">
          <div className="text-sm">
            Cost
            <div className="text-xl text-green-500  font-semibold">ETB 948</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mb-12">
        <h1 className="text-3xl font-serif mb-8">
          Enhance your travel experience
        </h1>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-8">
            <div className="flex items-center gap-8">
              <div className="w-48 h-48 relative rounded-lg overflow-hidden">
                <img
                  src="https://www.globaltimes.cn/Portals/0/attachment/2016/2016-10-06/08096c00-69c4-46d2-a4d5-f2ddbb9c7991.jpeg"
                  alt="Additional Baggage"
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-medium mb-2">
                  Add additional baggage
                </h3>
                <p className="text-gray-600 mb-4">
                  For 1 additional bag of 23kg
                </p>
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-sm text-gray-600">From</span>
                    <div className="text-2xl font-semibold">ETB 44</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation */}
      <div className="flex justify-between px-4">
        <Button variant="outline" onClick={() => handleNext(2)}>
          <a href="http://localhost:5173/PaymentReview/5">Back to Passengers</a>
        </Button>
        <Button
          className="bg-red-600 hover:bg-red-700"
          onClick={() => handleNext(3)}
        >
          Continue to Payment
        </Button>
      </div>
    </div>
  );
}

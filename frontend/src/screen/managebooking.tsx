import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";

 function ManageBooking() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1000px] mx-auto px-4 py-6">
        <h1 className="text-[40px] font-normal text-[#333] mb-6">
          Cancelling or changing a booking
        </h1>

        <div className="grid grid-cols-[300px,1fr] gap-6">
          {/* Left sidebar */}
          <div className="border border-[#ddd] rounded-sm overflow-hidden">
            <div className="bg-[#f9f9f9] border-b border-[#ddd] py-3 px-4">
              <span className="text-[#333] font-semibold">
                Cancelling an Emirates flight booking
              </span>
            </div>
            <div className="border-b border-[#ddd] py-3 px-4">
              <span className="text-[#333]">Change a booking</span>
            </div>
            <div className="py-3 px-4">
              <span className="text-[#333]">Refunds and travel vouchers</span>
            </div>
          </div>

          {/* Right content */}
          <div>
            <h2 className="text-[24px] font-normal text-[#333] mb-4">
              Cancelling an Emirates flight booking
            </h2>
            <div className="border border-[#ddd] rounded-sm overflow-hidden mb-6">
              <button
                onClick={() => toggleAccordion("cancel")}
                className="w-full flex justify-between items-center bg-white py-3 px-4 border-b border-[#ddd]"
              >
                <span className="text-[#333] font-semibold">
                  Can I cancel my booking?
                </span>
                {openAccordion === "cancel" ? (
                  <ChevronUp className="h-5 w-5 text-[#c60c30]" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[#c60c30]" />
                )}
              </button>
              {openAccordion === "cancel" && (
                <div className="p-4 text-[#333]">
                  <p className="mb-4">
                    Yes, you can make any changes to your booking on
                    emirates.com through{" "}
                    <Link href="#" className="text-[#c60c30] hover:underline">
                      Manage your booking
                    </Link>
                    .
                  </p>
                  <p>
                    We're currently receiving a lot of calls, so to avoid long
                    wait times, here are some other ways to{" "}
                    <Link href="#" className="text-[#c60c30] hover:underline">
                      contact us
                    </Link>
                    . You can also try calling us closer to your planned travel
                    date.
                  </p>
                </div>
              )}
            </div>

            <h2 className="text-[24px] font-normal text-[#333] mb-4">
              Change a booking
            </h2>
            <div className="border border-[#ddd] rounded-sm overflow-hidden">
              <button
                onClick={() => toggleAccordion("change")}
                className="w-full flex justify-between items-center bg-white py-3 px-4 border-b border-[#ddd]"
              >
                <span className="text-[#333] font-semibold">
                  How do I change details of my trip online after I've completed
                  the booking?
                </span>
                {openAccordion === "change" ? (
                  <ChevronUp className="h-5 w-5 text-[#c60c30]" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[#c60c30]" />
                )}
              </button>
              {openAccordion === "change" && (
                <div className="p-4 text-[#333]">
                  <p className="mb-4">
                    You can make changes to your booking through Manage your
                    booking. It's important to note that you'll find a Change my
                    booking link if your booking is eligible for online changes.
                    You might be charged for certain changes, depending on the
                    fare conditions of your ticket.
                  </p>
                  <p>
                    If your booking is not eligible for online changes, you can
                    contact your travel agent or our Contact Centres if you
                    booked with us directly.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[#333] hover:underline flex items-center"
          >
            <ChevronUp className="mr-1 h-4 w-4" />
            Back to top
          </button>
        </div>
      </div>
    </div>
  );
}
export default ManageBooking;
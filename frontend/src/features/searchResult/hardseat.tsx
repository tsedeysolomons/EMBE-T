// import { ChevronLeft, ChevronRight, X } from "lucide-react";
// import { Button } from "@/components/ui/button";

import TrainCard, { TrainCardProps } from "./train-card";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

function HardSleep({ data }: { data: number[] }) {
  console.log(data);

  

  return (
    <div className="">
      {data.map((_, i) => (
        <TrainCard {..._} />
      ))}
    </div>
  );
}

export default HardSleep;

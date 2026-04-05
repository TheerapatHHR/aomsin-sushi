import { useEffect, useState } from "react";
import { AmountCount } from "@/components/amountCount";

interface SushiPlateProps {
    plateType?: string;
    plateCost?: number;
    totalCosts?: number;
    setTotalCosts?: React.Dispatch<React.SetStateAction<number>>;
}

export function SushiPlate({ plateType, plateCost, totalCosts, setTotalCosts }: SushiPlateProps) {
    const [plateAmount, setPlateAmount] = useState(0);

    return (
        <div className="w-full bg-gray-100 rounded-lg flex flex-col p-2 gap-2">
            <div className="flex flex-wrap items-center justify-between">
                <div className="flex-1 text-center">{plateType}</div>
                <div className="flex-1 text-center">{plateCost}</div>
                <div className="flex-1">
                    <AmountCount amount={plateAmount} setAmount={setPlateAmount} plateCost={plateCost} setTotalCosts={setTotalCosts} />
                </div>
            </div>
        </div>
    );
}
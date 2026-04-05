import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { Button } from "@/components/ui/button"

interface AmountCountProps {
    amount: number;
    setAmount: React.Dispatch<React.SetStateAction<number>>;
    plateCost?: number;
    setTotalCosts?: React.Dispatch<React.SetStateAction<number>>;
}


export function AmountCount({ amount, setAmount, plateCost, setTotalCosts }: AmountCountProps) {
    const addAmount = () => {
        setAmount(prev => prev + 1);
        if (setTotalCosts && plateCost !== undefined) {
            setTotalCosts(prev => prev + plateCost);
        }
    }
    const subtractAmount = () => {
        if (amount === 0) return;
        setAmount(prev => Math.max(0, prev - 1));
        if (setTotalCosts && plateCost !== undefined) {
            setTotalCosts(prev => prev - plateCost);
        }
    }
    return (
        <div className="flex flex-wrap justify-between items-center">
            <Button 
            className="rounded-lg bg-red-500 text-white p-2" 
            onClick={subtractAmount}
            >
                <FaMinus />
            </Button>
            <div className="rounded-lg bg-gray-300 py-2 px-4">
                {amount}
            </div>
            <Button
            className="rounded-lg bg-blue-500 text-white p-2"
            onClick={addAmount}
            >
                <FaPlus />
            </Button>
        </div>
    );
}
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SushiPlate } from "@/components/sushiPlate";

import { useEffect, useState } from "react";

import { CgProfile } from "react-icons/cg";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoReload } from "react-icons/io5";

import costs from "@/data/costs.json"


interface ProfileCardProps {
  placeholder: string
  profileNumber: number
  setProfileNumber: React.Dispatch<React.SetStateAction<number>>
}

export function ProfileCard({ 
    placeholder, 
    profileNumber, 
    setProfileNumber 
}: ProfileCardProps) {
    const [totalCosts, setTotalCosts] = useState(0);
    const plateData = Object.entries(costs.plateCosts).map(([type, cost]) => ({ type, cost }));
    const [costAfterTax, setCostAfterTax] = useState(0);

    const [resetTrigger, setResetTrigger] = useState(0);

    const handleReset = () => {
        setTotalCosts(0);
        setResetTrigger(prev => prev + 1);
    };

    useEffect(() => {
        const taxRate = 0.1; // 10% tax
        setCostAfterTax(totalCosts + totalCosts * taxRate);
    }, [totalCosts]);

  return (
    <Card className="w-full max-w-sm animate-fadeIn">
      <CardHeader>
        <CardTitle>
            <div className="flex flex-wrap w-full items-center gap-2">
            <CgProfile />
            <Input
                id="name"
                type="text"
                placeholder={`${placeholder}`}
                className="w-30"
              />
              </div>
              </CardTitle>
        <CardDescription>
          Enter your plate information.
        </CardDescription>
        <CardAction>
          <Button variant="ghost" className="w-10 h-10" onClick={() => handleReset()}>
            <IoReload />
          </Button>
          <Button variant="destructive" className="w-10 h-10" onClick={() => setProfileNumber(profileNumber - 1)}>
            <RiDeleteBin5Line />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {plateData.map((plate) => (
          <SushiPlate key={`${plate.type}-${resetTrigger}`} plateType={plate.type} plateCost={plate.cost} totalCosts={totalCosts} setTotalCosts={setTotalCosts} resetTrigger={resetTrigger} />
        ))}
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Label className="text-center text-lg text-blue-500">
          Total: {costAfterTax}
        </Label>
      </CardFooter>
    </Card>
  )
}

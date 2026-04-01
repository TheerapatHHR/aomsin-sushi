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
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { RiDeleteBin5Line } from "react-icons/ri";


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
          <Button variant="destructive" className="w-10 h-10" onClick={() => setProfileNumber(profileNumber - 1)}>
            <RiDeleteBin5Line />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        {/* <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder={`${placeholder}`}
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form> */}
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Label className="text-center text-lg text-blue-500">
          Total: {totalCosts}
        </Label>
      </CardFooter>
    </Card>
  )
}

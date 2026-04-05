'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { ProfileCard } from "@/components/profileCard";
import { FaPlus } from "react-icons/fa6";


export function ProfileLists() {
    const [profileNumber, setProfileNumber] = useState(1)

    const getProfile = () => {
        let profileLists = []
        for (let i = 0; i < profileNumber; i++) {
            profileLists.push(
                <ProfileCard
                    key={i}
                    placeholder={`Profile ${i + 1}`}
                    profileNumber={profileNumber}
                    setProfileNumber={setProfileNumber}
                />
            )
        }
        return profileLists;
    }
    return (
        <div className="w-full max-w-md flex flex-col gap-4 items-center">
            {getProfile()}
            <Button
                variant="default"
                className="w-20 h-20 text-green-500 bg-green-100 hover:bg-green-200 rounded-full"
                onClick={() => setProfileNumber(profileNumber + 1)
                }>
                <FaPlus />
            </Button>
        </div>
    );
}
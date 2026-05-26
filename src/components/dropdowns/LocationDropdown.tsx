import React, { type Dispatch, type SetStateAction } from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

type Props = {
    location: string
    setLocation: Dispatch<SetStateAction<string>>
}

export default function LocationDropdown({ location, setLocation }: Props) {
    return (
        <Select value={location} onValueChange={(value) => setLocation(value)}>
            <SelectTrigger className="w-full xs:w-45">
                <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent className='z-1001'>
                <SelectGroup>
                    {location === 'custom' &&
                    <SelectItem value='custom'>
                        Custom
                    </SelectItem>
                    }

                    {locations.map(city => (
                        <SelectItem key={city} value={city}>
                            {city}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

const locations = [
    "Bangkok",
    "Tokyo",
    "Seoul",
    "Dubai",
    "Manila",
    "London",
    "New York",
    "Paris",
    "Berlin",
    "Madrid",
    "Rome",
    "Lisbon",
    "Hanoi"
]
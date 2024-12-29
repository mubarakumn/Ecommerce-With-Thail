import { Command } from 'cmdk'
import { useEffect, useState } from 'react'
import { FiEye, FiLogOut, FiPlus } from 'react-icons/fi'

export const CommandMenu = ({ open, setOpen }) => {
    const [value, setValue] = useState("")
    // Toggle the menu when ⌘K is pressed
    useEffect(() => {
        const down = (e) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener('keydown', down)
        return () => document.removeEventListener('keydown', down)
    }, [])

    return (
        <Command.Dialog open={open} onOpenChange={setOpen}
            label="Global Command Menu"
            className='fixed inset-0 bg-stone-950/50'
            onClick={() => setOpen(false)}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-md shadow-xl 
            border-stone-300 border overflow-hidden max-sm:w-10/12 max-w-lg mx-auto mt-12 ">
                <Command.Input
                    value={value}
                    onValueChange={setValue}
                    placeholder='What do you need?'
                    className='relative border-b border-stone-300 p-3 text-lg w-full
                placeholder:text-stone-400 focus:outline-none' />
                <Command.List>
                    <Command.Empty className='ml-2 p-2'>
                        No results found for{" "}
                        <span className='text-green-700'>{`"${value}"`}</span>
                    </Command.Empty>

                    <Command.Group heading="Team" className='text-sm 
                    mb-3 ml-2 text-stone-400'>
                        <Command.Item className='flex cursor-pointer transition-colors p-2 text-sm text-stone-950 
                        hover:bg-stone-200 rounded items-center gap-2'>
                            <FiPlus /> Invite Member
                        </Command.Item>
                        <Command.Item className='flex cursor-pointer transition-colors p-2 text-sm text-stone-950 
                            hover:bg-stone-200 rounded items-center gap-2'>
                            <FiEye /> See Org Chart
                        </Command.Item>
                        <Command.Separator />
                    </Command.Group>

                    <Command.Item className='flex gap-2 items-center bg-black text-white p-2'>
                        <FiLogOut />
                        Sign out
                    </Command.Item>
                </Command.List>
            </div>
        </Command.Dialog>
    )
}
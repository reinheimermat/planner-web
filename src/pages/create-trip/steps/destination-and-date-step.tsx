import 'react-day-picker/dist/style.css'

import { format } from 'date-fns'
import { ArrowRight, Calendar, MapPin, Settings2, X } from 'lucide-react'
import { useState } from 'react'
import { DateRange, DayPicker } from 'react-day-picker'

import { Button } from '../../../components/button'

interface DestinationAndDateStepProps {
  isGuestInputOpen: boolean
  closeGuestInput: () => void
  openGuestInput: () => void
}

export function DestinationAndDateStep({
  isGuestInputOpen,
  closeGuestInput,
  openGuestInput,
}: DestinationAndDateStepProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
  const [eventStartAndEndDates, setEventStartAndEndDates] = useState<
    DateRange | undefined
  >(undefined)

  function openDatePicker() {
    setIsDatePickerOpen(true)
  }

  function closeDatePicker() {
    setIsDatePickerOpen(false)
  }

  const displayedDate =
    eventStartAndEndDates &&
    eventStartAndEndDates.from &&
    eventStartAndEndDates.to
      ? format(eventStartAndEndDates.from, "d' de 'LLL")
          .concat(' até ')
          .concat(format(eventStartAndEndDates.to, "d' de 'LLL"))
      : null

  return (
    <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
      <div className="flex flex-1 items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <input
          type="text"
          placeholder="Para onde você vai?"
          className="flex-1 bg-transparent text-lg placeholder-zinc-400 outline-none"
          disabled={isGuestInputOpen}
        />
      </div>
      <button
        onClick={openDatePicker}
        className="flex w-[240px] items-center gap-2 text-left"
        disabled={isGuestInputOpen}
      >
        <Calendar className="size-5 text-zinc-400" />
        <span className="w-40 flex-1 text-lg text-zinc-400">
          {displayedDate ?? 'Quando?'}
        </span>
      </button>

      {isDatePickerOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60">
          <div className="space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2>Selecione a data</h2>
                <button onClick={closeDatePicker} className="cursor-pointer">
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
            </div>

            <DayPicker
              mode="range"
              selected={eventStartAndEndDates}
              onSelect={setEventStartAndEndDates}
            />
          </div>
        </div>
      )}

      <div className="h-6 w-px bg-zinc-800" />
      {isGuestInputOpen ? (
        <Button variant="secondary" onClick={closeGuestInput}>
          Alterar local/data <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={openGuestInput} variant="primary">
          Continuar <ArrowRight className="size-5" />
        </Button>
      )}
    </div>
  )
}

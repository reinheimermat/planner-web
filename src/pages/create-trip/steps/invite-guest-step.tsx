import { ArrowRight, UserRoundPlus } from 'lucide-react'

interface InviteGuestStepProps {
  emailToInvite: string[]
  openGuestModal: () => void
  openConfirmTripModal: () => void
}

export function InviteGuestStep({
  emailToInvite,
  openGuestModal,
  openConfirmTripModal,
}: InviteGuestStepProps) {
  return (
    <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
      <button
        type="button"
        className="flex flex-1 items-center gap-2 text-left"
        onClick={openGuestModal}
      >
        <UserRoundPlus className="size-5 text-zinc-400" />
        {emailToInvite.length > 0 ? (
          <span className="flex-1 text-lg text-zinc-100">
            {emailToInvite.length} pessoa(s) convidada(s)
          </span>
        ) : (
          <span className="flex-1 text-lg text-zinc-400">
            Quem estará na viagem?
          </span>
        )}
      </button>
      <div className="h-6 w-px bg-zinc-800" />
      <button
        onClick={openConfirmTripModal}
        className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400"
      >
        Confirmar viagem <ArrowRight className="size-5" />
      </button>
    </div>
  )
}

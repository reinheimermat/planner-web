import { ArrowRight, UserRoundPlus } from 'lucide-react'

import { Button } from '../../../components/button'

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
      <Button onClick={openConfirmTripModal} variant="primary">
        Confirmar viagem <ArrowRight className="size-5" />
      </Button>
    </div>
  )
}

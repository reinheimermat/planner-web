import { Calendar, Tag, X } from 'lucide-react'
import { FormEvent } from 'react'
import { useParams } from 'react-router-dom'

import { Button } from '../../components/button'
import { api } from '../../lib/axios'

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void
}

export function CreateActivityModal({
  closeCreateActivityModal,
}: CreateActivityModalProps) {
  const { tripId } = useParams()

  async function createActivity(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)

    const title = data.get('title')
    const occursAt = data.get('occurs_at')?.toString()

    await api.post(`/trips/${tripId}/activities`, {
      title,
      occurs_at: occursAt,
    })

    window.document.location.reload()

    closeCreateActivityModal()
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2>Cadastrar atividade</h2>
            <button onClick={closeCreateActivityModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Todos convidados podem visualizar as atividades.
          </p>
        </div>

        <form className="space-y-3" onSubmit={createActivity}>
          <div className="flex h-14 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4">
            <Tag className="size-5 text-zinc-400" />
            <input
              name="title"
              autoComplete="off"
              placeholder="Qual a atividade"
              className="flex-1 bg-transparent text-lg placeholder-zinc-400 outline-none"
            />
          </div>

          <div className="flex items-center gap-2">
            <div className="flex h-14 flex-1 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4">
              <Calendar className="size-5 text-zinc-400" />
              <input
                type="datetime-local"
                name="occurs_at"
                autoComplete="off"
                placeholder="Data e horário da atividade"
                className="flex-1 bg-transparent text-lg placeholder-zinc-400 outline-none"
              />
            </div>
          </div>

          <Button type="submit" variant="primary" size="full">
            Salvar atividade
          </Button>
        </form>
      </div>
    </div>
  )
}

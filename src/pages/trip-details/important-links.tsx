import { CircleDashed, Link2, Plus, UserCog } from 'lucide-react'

export function ImportantLinks() {
  return (
    <div className="w-80 space-y-6">
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Links importantes</h2>
        <div className="space-y-5">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100">
                Reserva do AirBnB
              </span>
              <a
                href="#"
                className="block truncate text-xs text-zinc-400 hover:text-zinc-200"
              >
                https://www.airbnb.com.br/rooms/123456
              </a>
            </div>
            <Link2 className="size-5 shrink-0 text-zinc-400" />
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100">
                Reserva do AirBnB
              </span>
              <a
                href="#"
                className="block truncate text-xs text-zinc-400 hover:text-zinc-200"
              >
                https://www.airbnb.com.br/rooms/123456
              </a>
            </div>
            <Link2 className="size-5 shrink-0 text-zinc-400" />
          </div>
        </div>
        <button className="judstify-center flex h-11 w-full items-center gap-2 rounded-lg bg-zinc-800 px-5 font-medium text-zinc-200 hover:bg-zinc-700">
          <Plus className="size-5" />
          Cadastrar novo link
        </button>
      </div>
      <div className="h-px w-full bg-zinc-800" />
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Convidados</h2>
        <div className="space-y-5">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100">
                Jessica White
              </span>
              <span className="block truncate text-sm text-zinc-400">
                jessica.white@gmail.com
              </span>
            </div>
            <CircleDashed className="size-5 shrink-0 text-zinc-400" />
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100">
                Dr. Rita Pacocha
              </span>
              <span className="block truncate text-sm text-zinc-400">
                Lacy.stiedemann@gmail.com
              </span>
            </div>
            <UserCog className="size-5 shrink-0 text-zinc-400" />
          </div>
        </div>
        <button className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-zinc-800 px-5 font-medium text-zinc-200 hover:bg-zinc-700">
          <Plus className="size-5" />
          Gerenciar convidados
        </button>
      </div>
    </div>
  )
}

import {
  Calendar,
  CircleCheck,
  CircleDashed,
  Link2,
  MapPin,
  Plus,
  Settings2,
  UserCog,
} from 'lucide-react'

// TODO: pause class video > 48:23

export function TripDetailsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-6 py-10">
      <div className="flex h-16 items-center justify-between rounded-xl bg-zinc-900 px-4 shadow-shape">
        <div className="flex items-center gap-2">
          <MapPin className="size-5 text-zinc-400" />
          <span className="text-zinc-100">Florianópolis, Brasil</span>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400" />
            <span className="text-zinc-100">17 a 23 de Agosto</span>
          </div>

          <div className="h-6 w-px bg-zinc-800" />

          <button className="flex items-center gap-2 rounded-lg bg-zinc-800 px-5 py-2 font-medium text-zinc-200 hover:bg-zinc-700">
            Alterar local/data <Settings2 className="size-5" />
          </button>
        </div>
      </div>
      <main className="flex gap-16 px-6">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>

            <button className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400">
              <Plus className="size-5" /> Cadastrar atividade
            </button>
          </div>
          <div className="space-y-8">
            <div className="space-y-2.5">
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-semibold text-zinc-300">
                  Dia 17
                </span>
                <span className="text-xs text-zinc-500">Sábado</span>
              </div>
              <p className="text-sm text-zinc-500">
                Nenhuma atividade cadastrada nessa data
              </p>
            </div>
            <div className="space-y-2.5">
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-semibold text-zinc-300">
                  Dia 18
                </span>
                <span className="text-xs text-zinc-500">Domingo</span>
              </div>
              <div className="space-y-2.5">
                <div className="flex items-center gap-3 rounded-xl bg-zinc-900 px-4 py-2.5 shadow-shape">
                  <CircleCheck className="size-5 text-lime-300" />
                  <span className="text-zinc-100">Academia em grupo</span>
                  <span className="ml-auto text-sm text-zinc-400">08:00h</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-zinc-900 px-4 py-2.5 shadow-shape">
                  <CircleCheck className="size-5 text-lime-300" />
                  <span className="text-zinc-100">Academia em grupo</span>
                  <span className="ml-auto text-sm text-zinc-400">08:00h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
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
            <button className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-zinc-800 px-5 font-medium text-zinc-200 hover:bg-zinc-700">
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
      </main>
    </div>
  )
}

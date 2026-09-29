import { useEffect, useId, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Minus, Plus, X, ZoomIn } from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { ease } from '@/lib/motion'

const MIN_SCALE = 1
const MAX_SCALE = 4

type Props = {
  src: string
  alt: string
}

function clampScale(value: number) {
  return Math.round(Math.min(MAX_SCALE, Math.max(MIN_SCALE, value)) * 100) / 100
}

export function ImageLightbox({ src, alt }: Props) {
  const reduced = useReducedMotion()
  const titleId = useId()
  const triggerRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const dragRef = useRef<{ id: number; x: number; y: number } | null>(null)
  const [open, setOpen] = useState(false)
  const [scale, setScale] = useState(MIN_SCALE)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)

  const close = () => setOpen(false)

  const zoomBy = (delta: number) => {
    setScale((current) => clampScale(current + delta))
  }

  useEffect(() => {
    if (scale === MIN_SCALE) setPan({ x: 0, y: 0 })
  }, [scale])

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const dialog = dialogRef.current
    const focusable = () =>
      [...(dialog?.querySelectorAll<HTMLElement>('button:not([disabled])') ?? [])]

    dialog?.querySelector<HTMLElement>('[data-lightbox-close]')?.focus()

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        close()
        return
      }
      if (event.key === '+' || event.key === '=') {
        event.preventDefault()
        zoomBy(0.5)
      }
      if (event.key === '-' || event.key === '_') {
        event.preventDefault()
        zoomBy(-0.5)
      }
      if (event.key === '0') {
        event.preventDefault()
        setScale(MIN_SCALE)
      }
      if (event.key !== 'Tab' || !dialog) return

      const nodes = focusable()
      if (nodes.length === 0) return
      const index = nodes.indexOf(document.activeElement as HTMLElement)
      event.preventDefault()
      const next = event.shiftKey
        ? nodes[(index <= 0 ? nodes.length : index) - 1]
        : nodes[index === nodes.length - 1 || index < 0 ? 0 : index + 1]
      next.focus()
    }

    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKey)
      triggerRef.current?.focus()
    }
  }, [open])

  useEffect(() => {
    const stage = stageRef.current
    if (!open || !stage) return

    const onWheel = (event: WheelEvent) => {
      event.preventDefault()
      const delta = event.deltaY < 0 ? 0.25 : -0.25
      setScale((current) => clampScale(current + delta))
    }

    stage.addEventListener('wheel', onWheel, { passive: false })
    return () => stage.removeEventListener('wheel', onWheel)
  }, [open])

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (scale <= MIN_SCALE) return
    event.currentTarget.setPointerCapture(event.pointerId)
    dragRef.current = { id: event.pointerId, x: event.clientX, y: event.clientY }
    setDragging(true)
  }

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current
    if (!drag || drag.id !== event.pointerId) return
    const dx = event.clientX - drag.x
    const dy = event.clientY - drag.y
    drag.x = event.clientX
    drag.y = event.clientY
    setPan((current) => ({ x: current.x + dx, y: current.y + dy }))
  }

  const onPointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (dragRef.current?.id !== event.pointerId) return
    dragRef.current = null
    setDragging(false)
  }

  const controlClass =
    'inline-flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-40'

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => {
          setScale(MIN_SCALE)
          setPan({ x: 0, y: 0 })
          setOpen(true)
        }}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label={`Ampliar imagem: ${alt}`}
        className="group/zoom relative mt-5 block w-full cursor-zoom-in overflow-hidden rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
      >
        <img
          src={src}
          alt=""
          width={300}
          height={300}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover/zoom:scale-[1.03]"
        />
        <span className="pointer-events-none absolute right-2 bottom-2 inline-flex size-11 items-center justify-center rounded-full bg-ink/75 text-white">
          <ZoomIn className="size-4" aria-hidden />
        </span>
      </button>

      {createPortal(
        <AnimatePresence>
          {open ? (
            <motion.div
              className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/85 p-4 sm:p-8"
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduced ? undefined : { opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={close}
            >
              <motion.div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                className="flex w-full max-w-6xl flex-col gap-3"
                initial={reduced ? false : { opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduced ? undefined : { opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.28, ease }}
                onClick={(event) => event.stopPropagation()}
              >
                <div className="flex items-center justify-between gap-3 text-white">
                  <h2 id={titleId} className="font-display text-base font-semibold sm:text-lg">
                    {alt}
                  </h2>
                  <div className="flex shrink-0 items-center gap-2">
                    <button
                      type="button"
                      className={controlClass}
                      aria-label="Diminuir zoom"
                      disabled={scale <= MIN_SCALE}
                      onClick={() => zoomBy(-0.5)}
                    >
                      <Minus className="size-4" aria-hidden />
                    </button>
                    <span className="min-w-12 text-center text-sm tabular-nums" aria-live="polite">
                      {Math.round(scale * 100)}%
                    </span>
                    <button
                      type="button"
                      className={controlClass}
                      aria-label="Aumentar zoom"
                      disabled={scale >= MAX_SCALE}
                      onClick={() => zoomBy(0.5)}
                    >
                      <Plus className="size-4" aria-hidden />
                    </button>
                    <button
                      type="button"
                      className={controlClass}
                      aria-label="Fechar"
                      data-lightbox-close
                      onClick={close}
                    >
                      <X className="size-4" aria-hidden />
                    </button>
                  </div>
                </div>

                <div
                  ref={stageRef}
                  className={`mx-auto w-fit max-w-full overflow-hidden rounded-2xl ring-1 ring-white/15 ${
                    scale > MIN_SCALE ? 'cursor-grab active:cursor-grabbing' : 'cursor-zoom-in'
                  }`}
                  style={{ touchAction: 'none' }}
                  onPointerDown={onPointerDown}
                  onPointerMove={onPointerMove}
                  onPointerUp={onPointerUp}
                  onPointerCancel={onPointerUp}
                  onDoubleClick={() => setScale((current) => (current > MIN_SCALE ? MIN_SCALE : 2))}
                >
                  <img
                    src={src}
                    alt={alt}
                    draggable={false}
                    className="max-h-[82vh] max-w-full select-none object-contain"
                    style={{
                      transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})`,
                      transition:
                        reduced || dragging
                          ? 'none'
                          : 'transform 180ms cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>,
        document.body,
      )}
    </>
  )
}

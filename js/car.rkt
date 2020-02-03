#lang racket

(require 2htdp/image
         2htdp/universe)

(define WIDTH 600)
(define HEIGHT 600)
(define MTS (empty-scene WIDTH HEIGHT))

(struct car (color xpos ypos xspeed) #:mutable #:transparent)

(define car0 (car 'red 300 300 6))

(define (struct->values s)
  (vector->values (struct->vector s))
  )

(provide (contract-out [tick (-> car? car?)]))
(define (tick c)
  (let ([x (car-xpos c)]
        [speed (car-xspeed c)])
    (move! c)
    (bouncing c)
    ))

(define (render/car c)
  (let-values ([(_ color x y s) (struct->values c)])
    (place-image (car->img c)
                 (remainder x WIDTH) y
                 MTS
                 )))

(define (car->img c)
  (rectangle 60 20 'solid (car-color c))
  )

(define/contract (bouncing c)
  (-> car? car?)
  (let-values ([(_ color x y s) (struct->values c)])
    (if (or (>= x (- WIDTH 30))
            (<= x 30))
        (car color x y (* s -1))
        c)))

(define/contract (move! c)
  (-> car? void?)
  (let-values ([(_ color x y speed) (struct->values c)])
    (set-car-xpos! c (+ x speed))))

(big-bang car0
          [on-tick tick]
          [to-draw render/car]
          )

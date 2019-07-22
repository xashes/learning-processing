#lang racket

(require 2htdp/image
         2htdp/universe
         data/queue)

(define WIDTH 600)
(define HEIGHT 600)
(define MTS (empty-scene WIDTH HEIGHT))

(struct posn (x y) #:transparent)
(define posns (make-queue))

;; WorldStates ::= (listof posn)

;; add mouse posn when mouse moves
(define/contract (update-mouse-posns lop x y me)
  (-> (listof posn?) real? real? mouse-event? (listof posn?))
  (define new-lop
    (let ([p (posn x y)])
      (cons p lop)))
  (if (> (length new-lop) 50)
      (drop-right new-lop 1)
      new-lop)
  )
(module+ test
  (require rackunit rackunit/text-ui)

  (check-equal? (update-mouse-posns '() 10 20 "move")
                (list (posn 10 20)))
  )

(define/contract (update-posns q x y me)
  (-> queue/c real? real? mouse-event? queue/c)
  (let ([pos (posn x y)])
    (enqueue! q pos)
    (if (> (queue-length q) 50)
        (dequeue! q)
        q)
    q)
  )

(define/contract (render q)
  (-> queue/c image?)
  (define lop (queue->list q))
  (if (empty? lop)
      MTS
      (let helper ([cp (first lop)]
                   [lst lop])
        (if (empty? (rest lst))
            (render/posn (first lst) cp MTS)
            (render/posn (first lst)
                         cp
                         (helper cp (rest lst))))))
  )

(define/contract (render/posn p cp bg)
  (-> posn? image? image?)
  (let ([x (posn-x p)]
        [y (posn-y p)]
        [mouse-x (posn-x cp)]
        [mouse-y (posn-y cp)]
        )
    (let ([dist (/ (abs (- mouse-x x)) 10)])
      (place-image (circle dist 'solid 'red)
                   x y
                   bg))))

(big-bang posns
          [on-mouse update-posns]
          [to-draw render]
          )

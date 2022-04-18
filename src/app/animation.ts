import { trigger, state, style, transition, animate, animation, keyframes } from '@angular/animations';

export const flipInY = trigger('flipInY', [
  transition('void => *',
    animation([
      animate(
        '2000ms 500ms',
        keyframes([
          style({
            visibility: 'visible',
            transform: 'perspective(400px) rotate3d(0, 1, 0, 1)',
            opacity: 0,
            easing: 'ease-in',
            offset: 0
          }),
          style({ transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)', opacity: 0.5, easing: 'ease-in', offset: 0.4 }),
          style({ transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)', opacity: 1, easing: 'ease-in', offset: 0.6 }),
          style({ transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)', easing: 'ease', offset: 0.8 }),
          style({ transform: 'perspective(400px)', easing: 'ease', offset: 1 })
        ])
      )
    ])
  ),
]);
export const navFadeInLeft = trigger('navFadeInLeft', [
  transition('void => *',
    animation([
      animate(
        '2000ms 500ms',
        keyframes([
          style({ visibility: 'visible', opacity: 0, transform: 'translateX(-10%)', easing: 'ease', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(0)', easing: 'ease', offset: 1 })
        ])
      )
    ])
  ),
]);
export const headerFadeInDown = [trigger('headerFadeInDown1', [
    transition('void => *',
      animation([
        animate(
          '2000ms 500ms',
          keyframes([
            style({ visibility: 'visible', opacity: 0, transform: 'translate3d(0, -50%, 0)', easing: 'ease', offset: 0 }),
            style({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 })
          ])
        )
      ])
    ),
  ]),
  trigger('headerFadeInDown2', [
    transition('void => *',
      animation([
        animate(
          '2000ms 700ms',
          keyframes([
            style({ visibility: 'visible', opacity: 0, transform: 'translate3d(0, -40%, 0)', easing: 'ease', offset: 0 }),
            style({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 })
          ])
        )
      ])
    ),
  ]),
  trigger('headerFadeInDown3', [
    transition('void => *',
      animation([
        animate(
          '2000ms 1000ms',
          keyframes([
            style({ visibility: 'visible', opacity: 0, transform: 'translate3d(0, -40%, 0)', easing: 'ease', offset: 0 }),
            style({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 })
          ])
        )
      ])
    ),
  ]), 
  trigger('headerFadeInDown4', [
    transition('void => *',
      animation([
        animate(
          '2000ms 1000ms',
          keyframes([
            style({ visibility: 'hidden', opacity: 0, transform: 'translate3d(0, -40%, 0)', easing: 'ease', offset: 0 }),
            style({ visibility: 'visible', opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 })
          ])
        )
      ])
    ),
  ]),
  trigger('headerFadeInDown5', [
    transition('void => *',
      animation([
        animate(
          '2000ms 1000ms',
          keyframes([
            style({ visibility: 'hidden', opacity: 0, transform: 'translate3d(0, -40%, 0)', easing: 'ease', offset: 0 }),
            style({ visibility: 'visible', opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 })
          ])
        )
      ])
    ),
  ])
];
export const hueRotate = [trigger('hueRotate', [
    transition('void => *',
      animation([
        animate(
          '1500ms 500ms',
          keyframes([style({ filter: 'hue-rotate(0deg)', offset: 0 }), style({ filter: 'hue-rotate(-360deg)', offset: 1 })])
        )
      ])
    ),
  ]),
  trigger('hueRotate1', [
    transition('void => *',
      animation([
        animate(
          '3000ms 500ms',
          keyframes([style({ filter: 'hue-rotate(0deg)', offset: 0 }), style({ filter: 'hue-rotate(-360deg)', offset: 1 })])
        )
      ])
    ),
  ]),
  trigger('hueRotate2', [
    transition('void => *',
      animation([
        animate(
          '3000ms 700ms',
          keyframes([style({ filter: 'hue-rotate(0deg)', offset: 0 }), style({ filter: 'hue-rotate(-360deg)', offset: 1 })])
        )
      ])
    ),
  ]),
  trigger('hueRotate3', [
    transition('void => *',
      animation([
        animate(
          '3000ms 900ms',
          keyframes([style({ filter: 'hue-rotate(0deg)', offset: 0 }), style({ filter: 'hue-rotate(-360deg)', offset: 1 })])
        )
      ])
    ),
  ]),
  trigger('hueRotate4', [
    transition('void => *',
      animation([
        animate(
          '3000ms 1100ms',
          keyframes([style({ filter: 'hue-rotate(0deg)', offset: 0 }), style({ filter: 'hue-rotate(-360deg)', offset: 1 })])
        )
      ])
    ),
  ]),
  trigger('hueRotate5', [
    transition('void => *',
      animation([
        animate(
          '3000ms 1300ms',
          keyframes([style({ filter: 'hue-rotate(0deg)', offset: 0 }), style({ filter: 'hue-rotate(-360deg)', offset: 1 })])
        )
      ])
    ),
  ]),
  trigger('hueRotate6', [
    transition('void => *',
      animation([
        animate(
          '3000ms 1500ms',
          keyframes([style({ filter: 'hue-rotate(0deg)', offset: 0 }), style({ filter: 'hue-rotate(-360deg)', offset: 1 })])
        )
      ])
    ),
  ]),
  trigger('hueRotate7', [
    transition('void => *',
      animation([
        animate(
          '3000ms 1700ms',
          keyframes([style({ filter: 'hue-rotate(0deg)', offset: 0 }), style({ filter: 'hue-rotate(-360deg)', offset: 1 })])
        )
      ])
    ),
  ]),
  trigger('hueRotate8', [
    transition('void => *',
      animation([
        animate(
          '1500ms 1900ms',
          keyframes([style({ filter: 'hue-rotate(0deg)', offset: 0 }), style({ filter: 'hue-rotate(-360deg)', offset: 1 })])
        )
      ])
    ),
  ]),
];
export const flip = [trigger ('flip',[
    transition('void => *',
      animation([
        animate(
          '2000ms 500ms',
          keyframes([
            style({
              transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)',
              easing: 'ease-out',
              offset: 0
            }),
            style({
              transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)',
              easing: 'ease-out',
              offset: 0.4
            }),
            style({
              transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)',
              easing: 'ease-out',
              offset: 0.5
            }),
            style({
              transform: 'perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
              easing: 'ease-in',
              offset: 0.8
            }),
            style({
              transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
              easing: 'ease-in',
              offset: 1
            })
          ])
        )
      ]),
    )
  ]),
  trigger ('flip1',[
    transition('void => *',
      animation([
        animate(
          '3000ms 500ms',
          keyframes([
            style({
              transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)',
              easing: 'ease-out',
              offset: 0
            }),
            style({
              transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)',
              easing: 'ease-out',
              offset: 0.4
            }),
            style({
              transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)',
              easing: 'ease-out',
              offset: 0.5
            }),
            style({
              transform: 'perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
              easing: 'ease-in',
              offset: 0.8
            }),
            style({
              transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
              easing: 'ease-in',
              offset: 1
            })
          ])
        )
      ]),
    )
  ]),
  trigger ('flip2',[
    transition('void => *',
      animation([
        animate(
          '3000ms 700ms',
          keyframes([
            style({
              transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)',
              easing: 'ease-out',
              offset: 0
            }),
            style({
              transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)',
              easing: 'ease-out',
              offset: 0.4
            }),
            style({
              transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)',
              easing: 'ease-out',
              offset: 0.5
            }),
            style({
              transform: 'perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
              easing: 'ease-in',
              offset: 0.8
            }),
            style({
              transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
              easing: 'ease-in',
              offset: 1
            })
          ])
        )
      ]),
    )
  ]),
  trigger ('flip3',[
    transition('void => *',
      animation([
        animate(
          '3000ms 900ms',
          keyframes([
            style({
              transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)',
              easing: 'ease-out',
              offset: 0
            }),
            style({
              transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)',
              easing: 'ease-out',
              offset: 0.4
            }),
            style({
              transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)',
              easing: 'ease-out',
              offset: 0.5
            }),
            style({
              transform: 'perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
              easing: 'ease-in',
              offset: 0.8
            }),
            style({
              transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
              easing: 'ease-in',
              offset: 1
            })
          ])
        )
      ]),
    )
  ]),
  trigger ('flip4',[
    transition('void => *',
      animation([
        animate(
          '3000ms 1100ms',
          keyframes([
            style({
              transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)',
              easing: 'ease-out',
              offset: 0
            }),
            style({
              transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)',
              easing: 'ease-out',
              offset: 0.4
            }),
            style({
              transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)',
              easing: 'ease-out',
              offset: 0.5
            }),
            style({
              transform: 'perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
              easing: 'ease-in',
              offset: 0.8
            }),
            style({
              transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
              easing: 'ease-in',
              offset: 1
            })
          ])
        )
      ]),
    )
  ]),
  trigger ('flip5',[
    transition('void => *',
      animation([
        animate(
          '3000ms 1300ms',
          keyframes([
            style({
              transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)',
              easing: 'ease-out',
              offset: 0
            }),
            style({
              transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)',
              easing: 'ease-out',
              offset: 0.4
            }),
            style({
              transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)',
              easing: 'ease-out',
              offset: 0.5
            }),
            style({
              transform: 'perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
              easing: 'ease-in',
              offset: 0.8
            }),
            style({
              transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
              easing: 'ease-in',
              offset: 1
            })
          ])
        )
      ]),
    )
  ]),
  trigger ('flip6',[
    transition('void => *',
      animation([
        animate(
          '3000ms 1500ms',
          keyframes([
            style({
              transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)',
              easing: 'ease-out',
              offset: 0
            }),
            style({
              transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)',
              easing: 'ease-out',
              offset: 0.4
            }),
            style({
              transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)',
              easing: 'ease-out',
              offset: 0.5
            }),
            style({
              transform: 'perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
              easing: 'ease-in',
              offset: 0.8
            }),
            style({
              transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
              easing: 'ease-in',
              offset: 1
            })
          ])
        )
      ]),
    )
  ]),
  trigger ('flip7',[
    transition('void => *',
      animation([
        animate(
          '3000ms 1700ms',
          keyframes([
            style({
              transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)',
              easing: 'ease-out',
              offset: 0
            }),
            style({
              transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)',
              easing: 'ease-out',
              offset: 0.4
            }),
            style({
              transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)',
              easing: 'ease-out',
              offset: 0.5
            }),
            style({
              transform: 'perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
              easing: 'ease-in',
              offset: 0.8
            }),
            style({
              transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
              easing: 'ease-in',
              offset: 1
            })
          ])
        )
      ]),
    )
  ]),
  trigger ('flip8',[
    transition('void => *',
      animation([
        animate(
          '3000ms 1900ms',
          keyframes([
            style({
              transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)',
              easing: 'ease-out',
              offset: 0
            }),
            style({
              transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)',
              easing: 'ease-out',
              offset: 0.4
            }),
            style({
              transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)',
              easing: 'ease-out',
              offset: 0.5
            }),
            style({
              transform: 'perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
              easing: 'ease-in',
              offset: 0.8
            }),
            style({
              transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
              easing: 'ease-in',
              offset: 1
            })
          ])
        )
      ]),
    )
  ]),
];
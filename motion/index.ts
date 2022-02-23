

export const dummyVariant = {
  initial: {
    opacity: 1
  },
  visible: {
    opacity: 1
  },
  hidden: {
    opacity: 1
  }
}

export const staggerChildren = (delay: number) => ({
  visible: {
    transition: {
      staggerChildren: delay
    }
  }
})

export const PageVariants = {
  initial: {
    opacity: .5,
    x: 10
  },
  visible: {
    opacity: 1,
    x: 0
  },
  hidden: {
    opacity: .5,
    x:  10
  }
}

export const PageTransition = {
  duration: .65,
  ease: "linear"
}

export const swipeUpVariant = {
  initial: {
    y: "100%",
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: .65,
      ease: "easeOut"
    }
  }
}

export const customSwipeUpVariant = (y: string, duration: number, ease: string = "easeOut" ) => ({
  initial: {
    y,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration,
      ease
    }
  }
})

export const showUpVariant = {
  initial: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: .5,
      delay: .65
    }
  }
}

export const squishedVariant = (delay: number) => ({
  visible: {
    y: ["0%", "-10%", "5%", "-4%", "0%"],
    scaleX: [1, 1, 1.4, 1, 1],
    scaleY: [1, 1, .7, 1, 1],
    transition: {
      duration: 1.5,
      times: [0, .25, .35, .45, .55],
      delay: delay ,
      ease: "linear"
    }
  }
})

export const workVariant = ( delay: number ) => ({
  initial: {
    "--after": "100%"
  } as any,
  visible: {
   "--after" : "0%",
   transition: {
     delay
   }
  } as any
})

export const swirlSquishedVariant = ( delay: number ) =>({
  visible: {
    y: ["0%", "-15%", "-15%", "5%", "-4%", "0%"],
    scaleX: [1, 1, 1, 1.4, 1, 1],
    scaleY: [1, 1, 1, .7, 1, 1],
    rotateY: ["0deg", "0deg", "360deg", "360deg", "360deg", "360deg"],
    transition: {
      duration: 1.5,
      times: [0, .15, .45, .55, .65, .75],
      delay,
      ease: "linear"
    }
  }
})
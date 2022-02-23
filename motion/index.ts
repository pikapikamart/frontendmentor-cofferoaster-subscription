

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
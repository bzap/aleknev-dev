
export const container = {
	hidden: { opacity: 0, y:20 },
	visible: {
	  y:0,
	  opacity: 1,
	  transition: {
		duration:0.3,
		delayChildren: 0.3,
		staggerChildren: 0.9
	  }
	}
  } 

export const skillsContainer = {
	hidden: { opacity: 0, y:20 },
	visible: {
	  y:0,
	  opacity: 1,
	  transition: {
		duration:0.3,
		delayChildren: 0.3,
		staggerChildren: 0.4
	  }
	}
  } 

export const subContainer = {
  hidden: { opacity: 0, y:20 },
  visible: {
	y:0,
	opacity: 1,
	transition: {
	  duration:0.5,
	  delayChildren: 0.25,
	  staggerChildren: 0.2
	}
  }
}

export const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
	transition: {
		duration:0.4
	},
	y: 0,
	opacity: 1
  }
};

export const skillsItem = {
	hidden: { opacity: 0 },
	visible: {
	  transition: {
		  duration:0.7
	  },
	  opacity: 1,
	  scale:[0.5, 1.02, 1]
	}
  }
  



export const projectContainer = {
	hidden: { opacity: 0, y:20 },
	visible: {
	  y:0,
	  opacity: 1,
	  transition: {
		duration:0.3,
		delayChildren: 0.4,
		staggerChildren: 1
	  }
	}
  } 

export const projectSubContainer = {
	hidden: { opacity: 0, y:20 },
	visible: {
	  y:0,
	  opacity: 1,
	  transition: {
		duration:0.3,
		delayChildren: 0.4,
		staggerChildren: 0.15
	  }
	}
  } 



export const pskillsItem = {
	hidden: { opacity: 0, y:20 },
	visible: {
      y:0,
	  transition: {
		  duration:0.2
	  },
	  opacity: 1,
	}
  }

export const pillItem = {
	hidden: { opacity: 0 },
	visible: {
	  transition: {
		  duration:0.8
	  },
	  opacity: 1,
	  scale:[0.5, 1.1, 1]
	}
  };


export const gitContainer = {
	hidden: { opacity: 0, y:20 },
	visible: {
	  y:0,
	  opacity: 1,
	  transition: {
		duration:0.3,
		delayChildren: 0.4,
		staggerChildren: 1
	  }
	}
  } 

export const gitItem = {
	hidden: { opacity: 0 },
	visible: {
	  transition: {
		  duration:0.8
	  },
	  opacity: 1,
	  scale:[0.5, 1.1, 1]
	}
  }



export const aboutBar = {
	active: {
		backgroundColor: "#f2eef7"
	},
	inactive: {
	  transition: { duration: 0.2 }
	}
}
export const heroBar = {
	active: {
		backgroundColor: "#e8edf3"
	},
	inactive: {
	  transition: { duration: 0.2 }
	}
}
export const projBar = {
	active: {
		backgroundColor: "#339b43"
	},
	inactive: {
	  transition: { duration: 0.2 }
	}
}

export const contactBar = {
	active: {
		backgroundColor: "#9b6133"
	},
	inactive: {
	  transition: { duration: 0.2 }
	}
}

export const contactBG = {
	active: {
		backgroundColor: "#9b9533"
	},
	inactive: {
	
	  transition: { duration: 0.2 }
	}
}

export const projBG = {
	active: {
		backgroundColor: "#33879b"
	},
	inactive: {
	
	  transition: { duration: 0.2 }
	}
}


export const aboutBG = {
	active: {
		backgroundColor: "#08ae86"
	},
	inactive: {
	
	  transition: { duration: 0.2 }
	}
}
export const heroBG = {
	active: {
		backgroundColor: "#edf2f8"
	},
	inactive: {
	  transition: { duration: 0.2 }
	}
}
  //pskillsItem, imageItem, skillsTextItem, previewContainer, item, skillsItem, pillItem

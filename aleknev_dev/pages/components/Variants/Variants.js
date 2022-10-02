
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
		backgroundColor: "#E4E4EA",
		transition: { duration: 0.7 }

	},
	inactive: {
	  transition: { duration: 0.2 }
	}
}
export const heroBar = {
	active: {
		backgroundColor: "#EEEEEE",
		transition: { duration: 0.7 }
	},
	inactive: {
	  transition: { duration: 0.1 }
	}
}
export const projBar = {
	active: {
		backgroundColor: "#e8edf3",
		transition: { duration: 0.7 }
	},
	inactive: {
	  transition: { duration: 0.2 }
	}
}

export const contactBar = {
	active: {
		backgroundColor: "#E7EEE9",
		transition: { duration: 0.7 }
	},
	inactive: {
	  transition: { duration: 0.2 }
	}
}

export const contactBG = {
	active: {
		backgroundColor: "#EDF2F0",
		transition: { duration: 0.7 }
	},
	inactive: {
	
	  transition: { duration: 0.2 }
	}
}

export const projBG = {
	active: {
		backgroundColor: "#edf2f8",
		transition: { duration: 0.7 }
	},
	inactive: {
	
	  transition: { duration: 0.2 }
	}
}


export const aboutBG = {
	active: {
		backgroundColor: "#E9E9F0",
		transition: { duration: 0.7 }
		
	},
	inactive: {
	
	  transition: { duration: 0.2 }
	}
}
export const heroBG = {
	active: {
		backgroundColor: "#F2F2F2",
		transition: { duration: 0.7 }
	},
	inactive: {
	  transition: { duration: 0.2 }
	}
}
  //pskillsItem, imageItem, skillsTextItem, previewContainer, item, skillsItem, pillItem

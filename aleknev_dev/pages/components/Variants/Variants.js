
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
		delay:0.3,
		duration: 0.3,
		delayChildren: 0.3,  
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



export const titleContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {

			delayChildren: 0.9,
			staggerChildren: 0.3
		}
	}
}   

export const subTitleContainer = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		y: 0,
		opacity: 1, 
	},
	transition: {
		type: "spring",
		damping: 12,
		stiffness: 200,
	}
}
export const indicators = {
	hidden: { opacity: 0, x: 20 },
	visible: {
		x: 0,
		opacity: 1,
	},
	transition: {
		type: "spring",
		damping: 12,
		stiffness: 200,
	}
}

export const textContainer = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: { 
            staggerChildren: 0.07, 
            delayChildren: 0.1 
        }
    }
};



export const about = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			delayChildren: 1,
			staggerChildren: 0.1
		}
	}
}   

export const title = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			delayChildren: 0.9,
			staggerChildren: 0.3
		}
	}
}   



export const itemTitle = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0
	}
}   

export const itemText = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		transition: {
			type: "spring",
			damping: 17,
			stiffness: 200,
			duration: 0.4
		},
		y: 0,
		opacity: 1
	}
};


export const background = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			delay:0.3,
			delayChildren: 0.3,
			staggerChildren: 0.1
		}
	}
}   

export const aboutItem = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			type: "spring",
			damping: 18,
			stiffness: 200,
			duration: 0.3,
			delayChildren: 0.15,
			staggerChildren: 0.25
		}
	}
} 


export const currentSkills = {
	hidden: { opacity: 0, scale: 0.95 },
	visible: {
		transition: {
			type: "spring",
			damping: 17,
			stiffness: 200,
			duration: 0.4
		},
		opacity: 1,
		scale: 1 
	}
};


export const gradient = {
	hidden: { opacity: 0 },
	visible: {
		transition: {
			duration: 1,
			delay: 1.2,
			delayChildren: 1,
			staggerChildren: 15
		},
		opacity: 1
	}
};


export const gradient2 = {
	hidden: { opacity: 0 },
	visible: {
		transition: {
			duration: 1,
			delay: 2.5,
			
		},
		opacity: 1
	}
}

export const gradient3 = {
	hidden: { opacity: 0 },
	visible: {
		transition: {
			duration: 1,
			delay: 0.4,

		},
		opacity: 1
	}
}

export const gradient4 = {
	hidden: { opacity: 0 },
	visible: {
		transition: {
			duration: 1,
			delay: 1.2,
			delayChildren: 1,
			staggerChildren: 1
		},
		opacity: 1
	}
};
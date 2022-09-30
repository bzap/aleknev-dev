import { useState, useRef, useLayoutEffect, ReactNode } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const Parallax = ({ children, offset }) => {
	const [top, setTop] = useState(0)
	const [height, setHeight] = useState(0)
	const ref = useRef(null)
	const { scrollY } = useScroll()
  
	const start = top - height
	const stop = top + offset
	const range = useTransform(scrollY, [start, stop], [offset, -offset])
	const y = useSpring(range, 
						{ 
							stiffness: 400, 
							damping: 70 
						})
	useLayoutEffect(() => {
	  const current = ref.current
	  const onResize = () => {
		setTop(current.getBoundingClientRect().top + window.scrollY || window.pageYOffset)
		setHeight(window.innerHeight)
	  }
	  onResize()
	  window.addEventListener('resize', onResize)
	  return () => window.removeEventListener('resize', onResize)
	}, [ref])
  
	
	return (
	  <motion.div 
	  ref={ref} 
	  style={{ y }}>
		{children}
	  </motion.div>
	)
  }
  
export default Parallax
  
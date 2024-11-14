'use client'
import { useState, useEffect } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

export function ThemeToggle() {
	const [theme, setTheme] = useState('dark')

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme') || 'dark'
		setTheme(savedTheme)
		document.documentElement.setAttribute('data-theme', savedTheme)
	}, [])

	const toggleTheme = () => {
		const newTheme = theme === 'dark' ? 'light' : 'dark'
		setTheme(newTheme)
		localStorage.setItem('theme', newTheme)
		document.documentElement.setAttribute('data-theme', newTheme)
	}

	return (
		<button onClick={toggleTheme} className='btn btn-ghost btn-circle'>
			{theme === 'dark' ? <SunIcon className='h-5 w-5' /> : <MoonIcon className='h-5 w-5' />}
		</button>
	)
}

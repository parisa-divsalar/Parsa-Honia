'use client';

import { useEffect } from 'react';
import { useLottie } from 'lottie-react';

import groovyWalkAnimation from '@/looti/header.json';

export default function LottieHero() {
	const { View, setSpeed } = useLottie({
		animationData: groovyWalkAnimation,
		loop: true,
	});

	useEffect(() => {
		setSpeed(0.1);
	}, [setSpeed]);

	return <>{View}</>;
}

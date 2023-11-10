'use client'
import jobsData from '@/app/public/jobs.json';
import educData from '@/app/public/educ.json';
import { useState } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faUserTie } from '@fortawesome/free-solid-svg-icons';


const Career = () => {
	const combinedData: Array<any> = [...jobsData, ...educData];

	const getEndDate = (date: string) => {
			if (date.includes('Depuis')) {
				return Number.POSITIVE_INFINITY;
		}
		const dateParts = date.split(' - ');
		if (dateParts.length > 1) {
			const endYear = parseInt(dateParts[1], 10);
			return isNaN(endYear) ? Number.NEGATIVE_INFINITY : endYear;
		} else {
			return parseInt(dateParts[0], 10) || Number.NEGATIVE_INFINITY;
		}
		};

		const combinedDataSorted = combinedData.sort(
			(a, b) => getEndDate(b.date) - getEndDate(a.date)
		);

	const [activeElements, setActiveElements] = useState(
		Array(combinedDataSorted.length).fill(false)
	);

	const handleArticleClick = (index: number) => {
		const newActiveElements = [...activeElements];
		newActiveElements[index] = !newActiveElements[index];
		setActiveElements(newActiveElements);
	};

	return (
		<main>
			<div className="container career">
				<h1>Mon parcours professionnel :</h1>
				<div className="timeline">
					{combinedDataSorted.map((item, index) => (
						<article
							key={index}
							className={
								(classNames({
									jobs: item.hasOwnProperty('company'),
									educ: !item.hasOwnProperty('company'),
									active: activeElements[index],
								}))
							}
							onClick={() => handleArticleClick(index)}
						>
							<div className="headersTimeline">
								<FontAwesomeIcon
									icon={
										item.hasOwnProperty('company') ? faUserTie : faGraduationCap
									}
									className="timelineIcon"
								/>
								<h3>
									<span className="title">{item.title}</span>
									{item.hasOwnProperty('company') ? (
										<span className="company">
											<br />
											{item.company}
										</span>
									) : (
										''
									)}
									{item.hasOwnProperty('degree') && item.degree !== null ? (
										<span className="degree">
											<br />
											{item.degree}
										</span>
									) : (
										''
									)}
									{item.hasOwnProperty('school') && (
										<span className="school">
											<br />
											{item.school}
										</span>
									)}
								</h3>
								<div className="date">
									<span className="year">{item.date}</span>
									{item.hasOwnProperty('duration') && item.duration !== null ? (
										<span className="duration">
											<br />
											{' ' + item.duration}
										</span>
									) : (
										''
									)}
								</div>
							</div>
							{item.description && (
								<ul>
									{item.description.map((desc: string, descIndex: number) => (
										<li key={descIndex}>{desc}</li>
									))}
								</ul>
							)}
						</article>
					))}
				</div>
			</div>
		</main>
	);
};

export default Career;
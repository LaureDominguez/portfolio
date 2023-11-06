import jobsData from '@/app/public/jobs.json';
import educData from '@/app/public/educ.json';

const Career = () => {
	const combinedData: Array<any> = [...jobsData, ...educData];
	return (
		<main>
			<h1>Mon parcours professionnel :</h1>
			<div className="timeline">
				{combinedData.map((item, index) => (
					<article
						key={index}
						className={item.hasOwnProperty('company') ? 'jobs' : 'educ'}
					>
						<h3>
							{item.date}
							{item.hasOwnProperty('duration') && item.duration !== null
								? ' | ' + item.duration
								: ''}
							{' | ' + item.title}
							{item.hasOwnProperty('company') ? ' | ' + item.company : ''}
							{item.hasOwnProperty('degree') && item.degree !== null ? (
								<span className="degree">{', ' + item.degree}</span>
							) : ''}
							{item.hasOwnProperty('school') && (
								<span className="school"><br/>{item.school}</span>
							)}
						</h3>
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
		</main>
	);
};

export default Career;
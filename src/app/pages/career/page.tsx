import jobsData from '@/app/public/jobs.json';
import educData from '@/app/public/educ.json';

const Career = () => {
	return (
		<div>
			<h1>Bienvenue sur la page Career</h1>

			<article className="jobs">
				<h2>Expériences Professionnelles</h2>
				{jobsData.map((job, index) => (
					<div key={index}>
						<h3>
							{job.date}
							{job.duration !== null ? ' | ' + job.duration : ''}
							{' | ' + job.title}
							{' | ' + job.company}
						</h3>
						{job.description && (
							<ul>
								{job.description.map((desc, descIndex) => (
									<li key={descIndex}>{desc}</li>
								))}
							</ul>
						)}
					</div>
				))}
			</article>

			<article className="educ">
				<h2>Formations</h2>
				{educData.map((educ, index) => (
					<div key={index}>
						<h3>
							{educ.date}
							{' | ' + educ.title}
							<span className="degree">
								{educ.degree !== null ? ', ' + educ.degree : ''}
							</span>
							<br />
							<span className="school">{educ.school}</span>
						</h3>
						{educ.description && (
							<ul>
								{educ.description.map((desc, descIndex) => (
									<li key={descIndex}>{desc}</li>
								))}
							</ul>
						)}
					</div>
				))}
			</article>
		</div>
	);
};

export default Career;

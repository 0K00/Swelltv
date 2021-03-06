import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';

const Tabs = ({ router }) => {
	const {
		query: { tab }
	} = router;

	const isTabOne = tab === '1' || tab == null;
	const isTabTwo = tab === '2';
	const isTabThree = tab === '3';
	return (
		<div class="">
			<div class="flex flex-col gap-8 sm:gap-0 sm:flex-row mb-3">
				<div selected={isTabOne}>
					<Link href={{ pathname: '/', query: { tab: '1' } }}>
						<a class="bg-gray-300 focus:bg-white hover:bg-gray-200 focus:outline-none rounded-md px-5 py-3 rounded-b-none font-bold text-xl">
							Ahrkaa
						</a>
					</Link>
				</div>
				<div selected={isTabTwo}>
					<Link href={{ pathname: '/', query: { tab: '2' } }}>
						<a class="bg-gray-300 focus:bg-white hover:bg-gray-200 focus:outline-none rounded-md px-5 py-3 rounded-b-none font-bold text-xl">
							Lunath
						</a>
					</Link>
				</div>
				<div selected={isTabThree}>
					<Link href={{ pathname: '/', query: { tab: '3' } }}>
						<a class="bg-gray-300 focus:bg-white hover:bg-gray-200 focus:outline-none rounded-md px-5 py-3 rounded-b-none font-bold text-xl">
							Inscience
						</a>
					</Link>
				</div>
			</div>
			<div>
				{isTabOne && (
					<React.Fragment>
						<div
							class="bg-white rounded-md rounded-tl-none twitch relative tabcontent"
							id="AhrkaaStream"
						>
							<iframe
								src="https://player.twitch.tv/?channel=ahrkaa&parent=swelle-0k00.vercel.app"
								parent="https://swell-tv.vercel.app/"
								height="100%"
								width="100%"
								frameborder="0"
								scrolling="no"
								allowfullscreen="true"
								class="rounded-lg rounded-tl-none absolute top-0 left-0"
							/>
						</div>
					</React.Fragment>
				)}
				{isTabTwo && (
					<React.Fragment>
						{' '}
						<div
							class="bg-white rounded-md rounded-tl-none twitch relative tabcontent"
							id="AhrkaaStream"
						>
							<iframe
								src="https://player.twitch.tv/?channel=lunath_&parent=swelle-0k00.vercel.app"
								parent="https://swell-tv.vercel.app/"
								height="100%"
								width="100%"
								frameborder="0"
								scrolling="no"
								allowfullscreen="true"
								class="rounded-lg rounded-tl-none absolute top-0 left-0"
							/>
						</div>
					</React.Fragment>
				)}
				{isTabThree && (
					<React.Fragment>
						{' '}
						<div
							class="bg-white rounded-md rounded-tl-none twitch relative tabcontent"
							id="AhrkaaStream"
						>
							<iframe
								src="https://player.twitch.tv/?channel=inscience_&parent=swelle-0k00.vercel.app"
								parent="https://swell-tv.vercel.app/"
								height="100%"
								width="100%"
								frameborder="0"
								scrolling="no"
								allowfullscreen="true"
								class="rounded-lg rounded-tl-none absolute top-0 left-0"
							/>
						</div>
					</React.Fragment>
				)}
			</div>
		</div>
	);
};

export default withRouter(Tabs);

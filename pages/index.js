import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const Tab = dynamic(() => import('../components/tab'));

export default function Home() {
	return (
		<div class="bg-gray-100">
			<Head>
				<title>Swell.tv</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" href="./styles/twitch.css" />
			</Head>
			<body class="bg-gray-100 mx-auto pt-8 pr-8 max-w-7xl pb-5">
				<header>
					<a href="#" class="fixed mt-5">
						<Image src="/logotype.svg" alt="Swelltv logotype" width={80} height={80} />
					</a>
					<div class="ml-24 max-w-xl flex flex-col gap-8 mb-80">
						<div class="text-6xl font-bold text-gray-900 sm:text-9xl">
							N'hésite pas!
						</div>
						<div class="text-gray-500">
							Pour passer du bon temps suis nous, on est cool.
						</div>
						<a
							href="#stream"
							class="inline-flex items-center justify-center px-5 py-3 font-semibold rounded-md text-gray-900 bg-green-400 hover:bg-green-300 transition-colors max-w-xs"
						>
							Clique pour chill!
						</a>
					</div>
				</header>
				<main id="stream" class="ml-24 max-w-6xl flex flex-col gap-20 mb-80">
					<div class="text-4xl sm:text-6xl font-bold text-gray-900">Stream</div>
					<div class="flex flex-col gap-8 block sm:hidden">
						<a
							href="https://www.twitch.tv/ahrkaa"
							class="bg-gray-300 focus:bg-white hover:bg-gray-200 focus:outline-none rounded-md px-5 py-3 font-bold text-xl"
						>
							Ahrkaa
						</a>
						<a
							href="https://www.twitch.tv/lunath_"
							class="bg-gray-300 focus:bg-white hover:bg-gray-200 focus:outline-none rounded-md px-5 py-3 font-bold text-xl"
						>
							Lunath
						</a>
						<a
							href="https://www.twitch.tv/inscience_"
							class="bg-gray-300 focus:bg-white hover:bg-gray-200 focus:outline-none rounded-md px-5 py-3 font-bold text-xl"
						>
							Inscience
						</a>
					</div>
					<div class="mb-80 hidden sm:block">
						<Tab />
					</div>

					<div class="flex flex-col gap-8">
						<div class="text-4xl sm:text-6xl font-bold text-gray-900 mb-10">
							Réseaux
						</div>
						<div class="flex flex-col gap-4 border-b-2 border-gray-300">
							<div class="font-bold text-4xl text-gray-900">Ahrkaa</div>
							<ul class="flex flex-col sm:flex-row gap-8 mb-10">
								<li>
									<a
										href="https://www.twitch.tv/ahrkaa"
										class="px-8 py-1 pb-1.5 bg-gray-300 rounded-md transition-colors hover:bg-green-400"
									>
										Twitch
									</a>
								</li>
								<li>
									<a
										href="https://twitter.com/Ahrkaa"
										class="px-8 py-1 pb-1.5 bg-gray-300 rounded-md transition-colors hover:bg-green-400"
									>
										Twitter
									</a>
								</li>
								<li>
									<a
										href="https://ahrkaprod.fr/"
										class="px-8 py-1 pb-1.5 bg-gray-300 rounded-md transition-colors hover:bg-green-400"
									>
										Portfolio
									</a>
								</li>
							</ul>
						</div>
						<div class="flex flex-col gap-4 border-b-2 border-gray-300">
							<div class="font-bold text-4xl text-gray-900">Lunath</div>
							<ul class="flex flex-col sm:flex-row gap-8 mb-10">
								<li>
									<a
										href="https://www.twitch.tv/lunath_"
										class="px-8 py-1 pb-1.5 bg-gray-300 rounded-md transition-colors hover:bg-green-400"
									>
										Twitch
									</a>
								</li>
								<li>
									<a
										href="https://twitter.com/lunath__"
										class="px-8 py-1 pb-1.5 bg-gray-300 rounded-md transition-colors hover:bg-green-400"
									>
										Twitter
									</a>
								</li>
								<li>
									<a
										href="https://soundcloud.com/lunath"
										class="px-8 py-1 pb-1.5 bg-gray-300 rounded-md transition-colors hover:bg-green-400"
									>
										Soundcloud
									</a>
								</li>
							</ul>
						</div>
						<div class="flex flex-col gap-4">
							<div class="font-bold text-4xl text-gray-900">Inscience</div>
							<ul class="flex flex-col sm:flex-row gap-8 mb-10">
								<li>
									<a
										href="https://www.twitch.tv/inscience_"
										class="px-8 py-1 pb-1.5 bg-gray-300 rounded-md transition-colors hover:bg-green-400"
									>
										Twitch
									</a>
								</li>
								<li>
									<a
										href="https://twitter.com/fabienlaborie"
										class="px-8 py-1 pb-1.5 bg-gray-300 rounded-md transition-colors hover:bg-green-400"
									>
										Twitter
									</a>
								</li>
								<li>
									<a
										href="https://soundcloud.com/inscience"
										class="px-8 py-1 pb-1.5 bg-gray-300 rounded-md transition-colors hover:bg-green-400"
									>
										Soundcloud
									</a>
								</li>
							</ul>
						</div>
					</div>
				</main>
				<div class="ml-24 max-w-6xl text-gray-900 text-xs">swelltv corp.</div>
			</body>
		</div>
	);
}

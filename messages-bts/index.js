const lyrics1 = [
    'Can\'t hold me down \'cuz you know I\'m a fighter',
    'Don’t be trapped in someone elses dream',
    'Go your own way\n Even if you live a day\n Do something\n Put weakness away',
    'Like an echo in the forest \n The day will come back around\n As if nothing happened\n Yeah, life goes on\n Like an arrow in the blue sky\n Another day flying by\n On my pillow, on my table \n Yeah, life goes on\n Like this again',
    'In the dark dawn, spreading trembling wings\n Keep on shining make it brighter than a spotlight',
    'If I want to die, \n I’ll strive to live as much as I want to die',
    'If you can’t fly, then run\n Today we will survive\n If you can’t run, then walk\n Today we will survive\n If you can’t walk, then crawl',
    'Even all the scars from your mistakes make up your constellation',
    '90% of your worries are just an imaginary swamp that you created',
    'Everywhere I go, everything I do\n I will show you, as much as I sharpened my sword\n To all the people who looked down on me\n Hey shout it out',
    'We must believe only in ourselves',
    'To lose your path\n Is the way to find that path',
    'If you try to damage me with simple words like that\n I only become stronger',
    'Even if winter comes again\n Even if I’m blocked off, I will still walk\n We are we are forever bulletproof',
    'I’m diamond, you know I glow up',
    'Throw away the fear',
    'In the dark night, don\'t be lonely\n Like the stars, we shine\n Don\'t disappear, because you\'re a great existence\n Let us shine',
    'Don’t ever be scared\n Whatever people say, you’re okay',
    'You shine in this pitch darkness\n That is the butterfly effect',
    'Although I’ll fall again\n I’ll make a mistake again\n And I’ll be covered in mud\n I believe in myself because I’m a hero',
    'What am I doin’ with my life\n This moment won’t ever come again\n I’m asking myself again, am I happy right now?\n The answer is already there, I’m happy',
    'Days when you hate that you’re you, days when you wanna disappear\n Let’s make a door in your heart\n If you open that door and go inside, this place will be waiting for you\n It’s ok to believe, it’ll comfort you, this Magic Shop',
    'I just wanna be happier',
    'It’s okay, come on when I say one, two, three, forget it\n Erase all sad memories',
    'These wings came from pain\n But they are wings headed for the light\n Though it’s hard and it hurts\n If I can fly, I will fly',
    'Run, run, run again\n It’s okay to fall\n Run, run, run again\n It’s okay to get hurt',
    'Even if you’re not perfect, you’re a limited edition',
    'All the dreamers\n Put your hands up\n Throw your worries away',
    'You can’t stop me lovin’ myself',
    'Leave your pointless worries aside for a moment\n Let\'s enjoy together and remember together',
    'Dream, you will fully bloom\n After all the hardships',
    'Forever we are young\n Even when I fall and hurt myself\n I keep running towards my dream',
    'Yes we\'re livin\' and dyin\'\n At the same time\n But you can open your eyes for now',
    'I\'m the one I should love in this world\n Shining me, precious soul of mine\n I finally realised so I love me\n Not so perfect but so beautiful',
    'Follow your dream like breaker \n Even if it breaks down, don’t ever run backwards, never\n Because the dawn right before the sun rises is the darkest',
    'So what\n Don’t stop and worry yourself\n It’s good for nothing\n Let go',
    'And you\'re gonna be happy\n Like the snow that just settled down\n Let\'s breathe, like the first time',
    'I reject rejection',
    'I want to tell you, that darkness\n Exists everywhere, don\'t be afraid of it\n Whatever night may swallow me, I won\'t give up\n The fight for you, we’ll shine',
    'I’m feeling just fine, fine, fine\n I’ll keep telling myself\n Even if I fall down again\n I’m fine',
    'It\'s okay to shed the tears\n But don\'t you tear yourself',
    'I believe in myself\n My back hurting is for my wings to come out\n I believe in you, even if things are bleak right now\n The end will be great\n Fly, fly up in the sky\n Fly, fly get ’em up high\n It’s the path you chose, dude don’t be scared\n This is just the first flight',
    'Bright lights, going forward\n You thought I was gonna fail but I’m fine, sorry',
    'It\'s just that loving myself \n Doesn\'t require anyone else\'s permission',
    'Moss surely grows on a stone that doesn’t roll\n If you can’t return, go straight through your mistakes and forget them all',
    'Though I walk this crazy world’s path\n I still want to live longer\n I want to find it, my faith',
    'In a world where you feel cold\n You gotta stay gold',
    'Just go instead of worrying',
    'Don’t worry even if I leave\n You’ll do well on your own',
    'Within this pitch black darkness, \n You are shining so brightly',
    'When you close your eyes\n In the darkness, my light\n Lights the way for you\n Let\'s walk forward without fear, you and I',
    'If you have moments where you feel happiness for a while\n It’s alright to stop\n Now we don’t run without knowing the destination\n It’s alright to not have a dream\n All the breaths you breathe are already in paradise',
    'You are the standard for happiness and you walk that road',
    'I’m becoming weird\n You can’t go to the peak by being normal, baby',
    'Yes, look down on me like that\n It’s my hobby to prove you wrong',
    'In a sigh, a lot of worries are hiding\n Stop thinking about it, you already know it all\n In the middle of the road, in the moment you want to give up\n Shout out louder\n So what, what, what',
    'Nothing can devour me\n I shout out with ferocity',
    'Time rushes ever forward\n There’s no ifs, buts, or maybes',
    'I love I love I love myself\n I know I know I know myself\n Ya playa haters you should love yourself',
    'But this day will be over\n When the minute and second hands overlap\n The world holds its breath for a little while',
    'You want to become everything, a leader for yourself\n But you have to believe in yourself, your own leader\n Bad thoughts and pessimistic realizations\n That’ll seem like it’s right but you’re really erasing your flavor',
    'If I\'m the sun, you\'re the moon, because when I rise, you go down',
    'I do believe your galaxy',
    'The morning will come again\n No darkness, no season is eternal',
    'Live however you want, it’s your life anyway',
    'I live so I love',
    'I said it\'s alright, oh yeah\n One day it\'ll be a good day, for sure\n You won\'t be alone, always\n I\'ll be by your side, we\'ll be okay\n If we\'re connected, surely it\'ll be brighter tomorrow',
    'There is nothing permanent in the world\n Everything is just a happening passing through',
    'Nothing lasts forever\n You only live once\n So live your life, not any other’s lives\n Take chances and never regret, never\n Never be late to do what you wanna do\n right now\n Because at one point of someday\n Everything you did\n Would be exactly what you will be\n Right?',
    'Even if my knees drop to the ground \n As long as they don’t get buried\n It won’t matter',
    'I\'m ready to let go',
    'You’ve shown me I have reasons\n I should love myself'
]
const chosenIndex= Math.floor(Math.random() * (lyrics1.length -1))
console.log(lyrics1[chosenIndex])
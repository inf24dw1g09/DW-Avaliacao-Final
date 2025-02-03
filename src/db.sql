DROP DATABASE IF EXISTS cami;

CREATE DATABASE cami;

USE cami;

DROP TABLE IF EXISTS USERS,
CHARACTERS,
CHARACTER_MEDIA,
MEDIA,
MEDIA_TYPE,
TYPES,
COSPLAY_IN_POST,
POST,
COMMENT;

CREATE TABLE
    IF NOT EXISTS USERS (
        user_name VARCHAR(15) PRIMARY KEY NOT NULL,
        email VARCHAR(80) UNIQUE NOT NULL,
        password VARCHAR(30) NOT NULL,
        nickname VARCHAR(15) NOT NULL
    );

CREATE TABLE
    IF NOT EXISTS CHARACTERS (
        character_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL,
        description VARCHAR(5000)
    );

CREATE TABLE
    IF NOT EXISTS MEDIA (
        media_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL
    );

CREATE TABLE
    IF NOT EXISTS CHARACTER_MEDIA (
        character_id INT NOT NULL,
        media_id INT NOT NULL,
        PRIMARY KEY (character_id, media_id),
        FOREIGN KEY (character_id) REFERENCES CHARACTERS (character_id) ON DELETE CASCADE,
        FOREIGN KEY (media_id) REFERENCES MEDIA (media_id) ON DELETE CASCADE
    );

CREATE TABLE
    IF NOT EXISTS TYPES (
        type_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        name VARCHAR(20) NOT NULL
    );

CREATE TABLE
    IF NOT EXISTS MEDIA_TYPE (
        media_id INT NOT NULL,
        type_id INT NOT NULL,
        PRIMARY KEY (media_id, type_id),
        FOREIGN KEY (media_id) REFERENCES MEDIA (media_id) ON DELETE CASCADE,
        FOREIGN KEY (type_id) REFERENCES TYPES (type_id) ON DELETE CASCADE
    );

CREATE TABLE
    IF NOT EXISTS POST (
        post_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        title VARCHAR(50) NOT NULL,
        date DATETIME NOT NULL,
        photographer VARCHAR(15) NOT NULL,
        FOREIGN KEY (photographer) REFERENCES USERS (user_name) ON DELETE CASCADE,
        description VARCHAR(300)
    );

CREATE TABLE
    IF NOT EXISTS COSPLAY_IN_POST (
        post_id INT NOT NULL,
        user_name VARCHAR(15) NOT NULL,
        character_id INT NOT NULL,
        PRIMARY KEY (post_id, user_name, character_id),
        FOREIGN KEY (post_id) REFERENCES POST (post_id) ON DELETE CASCADE,
        FOREIGN KEY (user_name) REFERENCES USERS (user_name) ON DELETE CASCADE,
        FOREIGN KEY (character_id) REFERENCES CHARACTERS (character_id) ON DELETE CASCADE
    );

CREATE TABLE
    IF NOT EXISTS COMMENT (
        comment_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        post_id INT NOT NULL,
        user_name VARCHAR(15) NOT NULL,
        date DATETIME NOT NULL,
        message VARCHAR(300),
        FOREIGN KEY (post_id) REFERENCES POST (post_id) ON DELETE CASCADE,
        FOREIGN KEY (user_name) REFERENCES USERS (user_name) ON DELETE CASCADE
    );

INSERT INTO
    TYPES
VALUES
    (1, "Anime"),
    (2, "Games");

INSERT INTO
    MEDIA (name)
VALUES
    ("Higurashi no Naku Koro ni");

INSERT INTO
    CHARACTERS (name, description)
VALUES
    (
        "Rika Furude",
        "Age: 11 Birthday: August 21 (Leo) Height: 137 cm (4'6')  Rika is a younger classmate in Keiichi's school, and is in the same grade level as Satoko. Naturally, she is great friends with her, as they live together in the same house. She is revered by the villagers as the heir of the local shrine, and plays the role of a miko in the annual Watanagashi Festival. She has been the head of the Furude house since her parents died, but rarely attends town meetings due to her young age. While she does not speak a lot, she likes to say nonsense words such as 'mi~' and 'nipa~' and often ends her sentences with '-nano desu,' which inflame Rena's passion for cute things. She also likes to describe events using sound effects, such as 'The cat was going 'nya nya' and 'scritch scritch'' or saying 'Clap! Clap! Clap!' when clapping her hands.   (Source: 07th Expansion Wiki)"
    ),
    (
        "Satoko Houjou",
        "Birthday: June 24 Height: 137 cm Age: 11  Satoko is a younger classmate in Keiichi's school. She has a distinctive style of speech, ending all of her sentences with 'wa' which, at times, is grammatically incorrect. In spite of her young age, she is quite clever in setting up traps, and likes to practice on Keiichi.   Kai:  Gou:  She dislikes Japanese pumpkin, and due to her color blindness, she cannot tell the difference between cauliflower and broccoli."
    ),
    (
        "Keiichi Maebara",
        "Birthdate: April 13, 1967  Maebara Keiichi is the main protagonist of the first 3 Higurashi Arcs, Onikakushi-hen, Watanagashi-hen, and Tatarigoroshi-hen. He is the son of a famous and extremely wealthy artist, and recently moved to Hinamizawa after an array of unfortunate and awful events in his hometown. As a charismatic, lively attitude, and his talented tongue allow him to quickly fit in the town and make new friends, and also win some club activities. When in need of a weapon, he wields Satoshi's old bat. Keiichi often receives the butt of the jokes in the club's activities from which he was the correct answer to some games they play, to wearing embarrassing costumes whenever he loses punishment games.  Keiichi has brown hair with dark blue eyes and is described as charismatic to others.  During his school days, he wears a red shirt under a white one, black pants, a belt and red shoes. However, during his free days, he wears a black sleeveless shirt under a red vest, green shorts with a blue belt and shoes."
    ),
    (
        "Rena Ryuuguu",
        "Age: 13 Birthdate: July 28 Height: 161 cm (5'3') Hobbies: collecting cute things, obsessing over cute things, treasure hunting Famous quote: 'Friends. Those companions you speak of are only friends during those fun, yet unimportant times. When painful times come, they won't be your ally.'  Rena is the main female protagonist of the question arcs and a girl who returned from Ibaraki to Hinamizawa one year ago, she is in the same grade level as Keiichi.  She is very kind and takes care of Keiichi whenever possible, but is also naïve and is usually subject to light teasing by Keiichi, it is hinted later in the series that she loves him. She is distinguished by her obsession with things she perceives as adorable calling them kaaii (かぁいい, a slurred form of kawaii (かわいい), meaning 'cute'), which are usually moekko characters or items she finds while scouring the local dump. Generally, these things are not considered cute by others.  She also utters the phrase hau (はぅ) when excited or flustered, and has a habit of repeating phrases at the ends of her sentences, most famously 'kana? kana??' (かな? かな??, lit. 'I wonder, I wonder?').  Every now and then, she goes treasure hunting in the town's trash heap, searching for 'cute' things to collect, and whenever she sees something that grabs her attention, she proclaims, 'I wanna take it home!' (お持ち帰り, Omochikaerī) and proceeds to try and do so, becoming virtually unstoppable during these intervals.  When in 'Take it Home' mode, she comically becomes stronger and faster. Despite this disarming trait, Rena is shown to be amazingly observant and perceptive about the things around her (in Watanagashi-hen, she was able to deduce that both Rika and Satoko went to the Sonozaki house by looking through the contents of their fridge and a flier).  According to Mion, while Rena might seem cute herself, people should be careful not to anger her as she becomes quite scary when angered."
    ),
    (
        "Mion Sonozaki",
        "Age: 14 Birthdate: July 10  Mion is the oldest kid in Keiichi's class. As the elder, she is the class president and everyone looks up to her as the leader. Her social skills are on par with Keiichi, whom she highly respects as a friend and rival (though it is later shown that she has a crush on him).  She acts like a tomboy, and calls herself oji-san (meaning old man), but has a hidden girlish side. She is next in line to be the head of the Sonozaki household, one of the Three Families which holds tremendous influence in Hinamizawa. She is often seen with a holstered airsoft gun, even though she is never seen using it, and was removed in the PS2 adaption of the game; she is, however, very adept in the use of martial arts.  Mion also serves as leader of the after-school club consisting entirely of the main characters. She organizes a variety of strategy-based games for the members to play with penalties for any losers. Penalties usually involve wearing embarrassing or frilly outfits on the way home. Each game she organizes involves bending the general rules or using questionable and crude methods to win such as playing cards with a marked deck or using feminine wiles to discourage opposition."
    ),
    (
        "Shion Sonozaki",
        "Age: 14 Birthday: July 10  Shion is Mion's identical twin sister, who currently resides in Okinomiya. In spite of their different personalities, she and Mion often switch places, and it can be difficult to distinguish between them.    She was sent by the Sonozaki family to a private boarding school, but escaped and returned to live near her hometown, where she lives with Kasai. In spite of all this, she and Mion maintain a close relationship. In most of the arcs, she is at a different school from the other main characters, and therefore appears less frequently.  She works as a waitress at the Angel-Mort restaurant and is the manager's assistant for the Hinamizawa Fighters little league team. She is often seen carrying a taser, and also wears yellow ribbon in her hair. She is also shown to be good with guns, along with Kasai, in Matsuribayashi-hen."
    ),
    (
        "Akane's Husband",
        "The boss of the yakuza organization. He is Akane's husband and Mion and Shion's father."
    ),
    (
        "Mamoru Akasaka",
        "Age: 25 Birthday: August 3, 1957  Mamoru is the main character in Himatsubushi-hen. He is a young police investigator at the Metropolitan Police Department in Tokyo."
    ),
    (
        "Yukie Akasaka",
        "Akasaka Yukie is Akasaka Mamoru's wife, and is only seen in Himatsubushi-hen and at the end of Matsuribayashi-hen. In that chapter she stays in the hospital while she is pregnant. While in the hospital, she falls from the stairs and dies but her baby survives. In Minagoroshi-hen and Matsuribayashi-hen however, it is revealed in these alternate timelines that Mamoru returned early after heeding Furude Rika's warning, thus preventing her death.  (Source: Higurashi No Naku Koro Ni Wikia)"
    ),
    (
        "Rumiko Chie",
        "Rumiko is the female teacher of Keiichi's class, who is a parody character of Tsukihime's Ciel-Senpai (permission for her usage was given by Type-Moon). The seiyū for her character in the anime series is the same as the seiyū of Ciel from the Tsukihime anime. Going along with the parody, her favorite food is curry rice, just like Ciel, and will go to great and somewhat scary, lengths to uphold the honor of curry, which is shown in the Higurashi no Naku Koro ni Rei OVA, where she becomes enraged by Keichi's 'offense' to curry. On a stronger note, she is seen wielding wooden T's, shapped, and held, in exactly the same fashion as the Black Keys from Tsukihime."
    ),
    (
        "Father Furude",
        "He was the father of Rika Furude.  He was the head of the Furude family and was in charge of the Saiguden. While he loved his daughter very deeply, he had no qualms about punishing her via spanking after he mistakenly thought that she broke a section of Oyashiro-sama's staue (though it was really Satoko). During the dam war, Mr. Furude took a neutral position on the matter and refused to take either side, which earned some animosity from some of the villagers. Though Shion thought that the priest acted mature for not taking any sides, Mion felt that he was responsible for causing even more unrest in Hinamizawa and that he should have gone along with the protesters in order to keep the village united.  Takano wanted to use Rika as a test subject to further the research of the Hinamizawa syndrome (because it is passed down through the females of the family, such as Mrs. Furude, though exact the exact details remain unclear). Her parents refused to have their daughter used like that, so Takano had the Yamainu drug Mr. Furude so it would look like he died of an unknown disease.  (Source: Higurashi No Naku Koro Ni Wiki)"
    ),
    (
        "Hondaya",
        "Hondaya is a member of the Public Security who supports Akasaka in his search for the Minister's grandson. Hondaya serves in the Okinomiya Police Station."
    ),
    (
        "Satoshi Houjou",
        "Age: 14-15 Birthday: June 16  Satoshi is the older brother of Satoko Houjou. Although he is currently missing, his past influence is the key to the actions of several characters in Higurashi. Similar to Satoko, he cannot distinguish the difference between cauliflower and broccoli. Because of this, it can be inferred that both Satoshi and Satoko are color-blind. Satoshi is referred to by Satoko as Nii-Nii, a childish form of the Japanese word ani (兄, ani meaning older brother).  (Source: Wikipedia)"
    ),
    (
        "Tamae Houjou",
        "She is Teppei's wife and Houjou Satoko and Houjou Satoshi's aunt."
    ),
    (
        "Teppei Houjou",
        "Teppei is Satoko and Satoshi's uncle/foster father. He and his wife were forced to take care of Satoko and Satoshi after the death of their parents, but they abused them. He currently lives in Okinomiya. According to Kasai, he is a pimp and uses his lover Rina to swindle men out of their money.    (Source: Wikipedia)"
    ),
    (
        "Toshiki Inukai",
        "Toshiki is the grandson of the chief of the dam's construction.  In episode 15, he is kidnapped by some anonymous guys."
    ),
    (
        "Kyousuke Irie",
        "Age: Late 20s to early 30s Birthday: December 3  Kyosuke is the head doctor of the village clinic.   Despite his young age and the fact that he has a severe maid fetish, he is highly respected in the community.   He cheerfully makes house calls and seems to truly care about everyone's health.   He has (half-jokingly) admitted that he wishes to marry Satoko when she is older, but is not above chasing after Rika when she is wearing one of the uniforms from the restaurant Angel Mort.   In addition, he is the manager of the village's baseball little league team, the Hinamizawa Fighters."
    ),
    (
        " Kaieda",
        "Kaieda is the principal of the Hinamizawa School and he first appears in Onikakushi-hen. In Minagoroshi-hen, he helped Keiichi and the Club convince the youth office to save Satoko from her abusive uncle, Hōjō Teppei. During a scene in Onikakushi-hen, it is revealed that he is ashamed of his bald head. He traveled all around the world to become a martial arts master. He also became an educator 'after being concerned about the corrupted educational system of post-war Japan'. The students believe he is the reason why no delinquents attend Hinamizawa's school.  (Source: Higurashi No Naku Koro Ni Wikia)"
    ),
    (
        "Tatsuyoshi Kasai",
        "Height: 244 cm (8'0'')  Tatsuyoshi is an employee of the Sonozaki family, who looks like a secret agent. He was more active in the past, but has settled down to become Shion's caretaker.   He somehow knows both Teppei and Rina, and is aware of their lifestyles and badgering tactics.   In Matsuribayashi-hen, he displays extreme strength and combat experience while raiding the Irie Clinic, frequently subduing members of the Yamainu."
    ),
    (
        "Kiichirou Kimiyoshi",
        "Head of one of the Three Families, and the official village chief of Hinamizawa. He seems to be a kindly old man, but is vehement in his hatred for Hinamizawa's enemies.  (Source: Wikipedia)"
    ),
    (
        "Komiyama",
        "Komiyama is an officer of the Okinomiya police department."
    ),
    (
        "Katsuya Kumagai",
        "A detective in the Okinomiya police station and Kuraudo Ooishi's subordinate."
    ),
    (
        "Ichirou Maebara",
        "Maebara Ichirō is a character in the Higurashi no Naku Koro ni series, Maebara Aiko's husband, and Maebara Keiichi's father and the builder of the Maebara House. He works as an artist and is seemingly very fond of young girls. His name is not spoken in the anime (though it can be seen on a badge), but is seen various times throughout the manga adaptations. He was inspired to move to Hinamizawa after watching Rika and Hanyū playing in an open lot while he was sight seeing.  In Tatarigoroshi-hen, it is revealed that Keiichi has never seen his father's art. However, when he questions one of his father's business partners about it, he learns that his father is actually quite famous. He's described as an artist who 'doesn't set a limit of purchase, always replies to fanmail, understands what the public needs, knows that it's a big no-no to take off socks, glasses and uniforms', and that whenever he participates in an event, 'there's always a long line' that expands as far as from the door of the convention to the furthest corners and walls.  In the sound novel and manga adaptations of Minagoroshi-hen, he supports Keiichi when his son is facing the village about Satoko's abuse. Keiichi also confesses to the club that he and his father are very close.  His appearance differs from anime and manga.  (Source: Higurashi No Naku Koro Ni Wiki)"
    ),
    (
        "Aiko Maebara",
        "Maebara Aiko is a character in the Higurashi no Naku Koro ni series, and Maebara Keiichi's mother. She first appears in Onikakushi-hen along with her husband, Maebara Ichirou. She's rarely seen in the anime, but she appears various times throughout the manga adaptations. In the anime, it is a recurring habit that her face is not fully shown.  In Tatarigoroshi-hen, it's revealed by Keiichi that she's very fond of detective novels and reads all kind of crime novels of different writers all over the world (including books by Agatha Christie like And Then There Were None and Murder on the Orient Express). She also wrote a crime novel once and contributed to a crime novel contest. She easily reveals the trick of the perfect crime to Keiichi (not let the 'introduction' begin) which helps him to murder Houjou Teppei. As it is told by Ooishi, she graduated in a 'humble women's university'.  (Source: Higurashi Wiki)"
    ),
    (
        "Takezou Makino",
        "An old man who's auditor of the Onigafuchi Defense Alliance."
    ),
    (
        "Rina Mamiya",
        "Rina is a woman who appears in Rena's life in the story Tsumihoroboshi-hen. She is the lover of Teppei Houjou, and together they swindle men out of their money through intimidation and blackmail schemes."
    ),
    (
        "Suguru Okamura",
        "Okamura Suguru is a student at the Hinamizawa Branch School and Tomita Daiki's best friend. He is in the same year as Hōjō Satoko and Furude Rika."
    ),
    (
        "Tetsuro Okonogi",
        "Higurashi no Naku Koro ni:   Umineko no Naku Koro ni: He is the president of a company who has ties with Rudolf's and Hideyoshi's companies. Ange goes to question him about everything he knows of the Rokkenjima murders, despite suspecting that he may betray her. Although he had been hired by the Sumadera family to stall Ange and allow them to take control of her wealth, he proves himself to be Ange's fundamental ally in the end and allows her to escape, hiring Amakusa to protect her. He influences Ange greatly in her battle against Beatrice, particularly his belief that truth can only be obtained through love."
    ),
    (
        "Kuraudo Ooishi",
        "Age: Around 55 (the average retirement age in Japan) Birthday: November 15  Kuraudo Oishi is a veteran police investigator at Okinomiya who has vowed to solve the mystery of the Hinamizawa murders before his retirement, due to personal reasons. Due to his uncouth tactics and the lengths that he goes to in order to solve the mystery, he is looked upon as a nuisance by the villagers. He approaches one of the main characters to become his informant in several arcs, and is sometimes unwittingly responsible for triggering their paranoia.   (Source: Wikipedia)"
    ),
    (
        "Reiko Ryuuguu",
        "Rena's mother started her career as a designer at a small clothing manufactory in Okinomiya, where she met Mr. Ryuuguu. They married and lived in a small apartment in Okinomiya until Mrs. Ryuuguu became pregnant; they then moved into Rena's paternal grandmother's house up until Rena started elementary school.  Around this time the manufacturer Mr. and Mrs. Ryuuguu worked for began to have financial difficulties, so she began to consider going independent with a few other designers. The situation became complicated, but she received an offer to work at a design office in Ibaraki and took it. The company promised Mrs. Ryuuguu a responsible project, since the firm had high expectations with her talent. When the family moved, Mr. Ryuuguu had to give up his job and became a homemaker. The project became a large success, and Mrs. Ryuuguu started coming home late every night - some nights she would not even come home due to large projects.  Rena's mother began to take Rena out places without telling her father, including barbecue parties with her coworkers. Around this time Rena's mother had developed an affair with a fellow designer known as Mr. Akihito. She had been drafted by a headhunter to work at a bigger company and was promoted to a higher position, and by this time was earning well into six figures. After taking Rena to a restaurant and eating parfaits with her (Rena's childhood dream), she wanted Rena to leave her father and come live with her and Mr. Akihito. Rena loudly voiced her disapproval, saying that she could continue her relationship with Mr. Akihito but was not allowed to divorce her father. This is when Rena's mother revealed that she was pregnant.  Rena's mother sent a lawyer to the household in Ibaraki many times but refused to meet him in any form, including over the phone. Mr. Ryuuguu became depressed, as did Rena. One day, Rena met with her mother again, but did not speak to her; Mr. Ryuuguu had given her a letter to give to her mother, but her mother did not read it when Rena asked her to. That meeting was the last time Rena's mother met with Rena.  (Source: higurashi.wikia)"
    ),
    (
        "Yasunori Ryuuguu",
        "Rena's mother started her career as a designer at a small clothing manufactory in Okinomiya, where she met Mr. Ryūgū. They married and lived in a small apartment in Okinomiya until Mrs. Ryūgū became pregnant; they then moved into Rena's paternal grandmother's house up until Rena started elementary school.  Around this time the manufacturer Mr. and Mrs. Ryūgū worked for began to have financial difficulties, so she began to consider going independent with a few other designers. The situation became complicated, but she received an offer to work at a design office in Ibaraki and took it. The company promised Mrs. Ryūgū a responsible project, since the firm had high expectations with her talent. When the family moved, Mr. Ryūgū had to give up his job and became a homemaker.  Mr. Ryūgū was not doing well, and at first had a clerical job at a small company; he kept changing jobs as well. His role as a homemaker fell short due to his inability to cook amongst other things, so Rena began to take up the chores for him.  Rena's mother sent a lawyer to the household in Ibaraki many times but refused to meet him in any form, including over the phone. Mr. Ryūgū became depressed, as did Rena. One day, Rena met with her mother again, but did not speak to her; Mr. Ryūgū had given her a letter to give to her mother, but her mother did not read it when Rena asked her to. That meeting was the last time Rena's mother met with Rena.  In Tsumihoroboshi-hen, Mr. Ryūgū begins a relationship with Mamiya Rina. He met her at a gentleman's club in Okinomiya named Blue Mermaid, of which Rina is the private manager. He is not aware of her relationship with Hōjō Teppei and falls into their badger game trap. It is implied that the two had slept together, as Rina lies about being pregnant to lead him into the prospect of marriage. Before she can go into the final stage of the plan and have Teppei intrude while they are in bed together, Rena murders Rina. However, Teppei still attacks Mr. Ryūgū late after dark, and subsequently is also murdered.  In Minagoroshi-hen, a similar scenario was set to occur, but Rena talked to her father about the issue instead of taking matters into her own hands. Mr. Ryūgū also gets a new job in this arc.  (Source: Higurashi No Naku Koro Ni Wiki)"
    ),
    (
        "Sato",
        "Sato is a resident of Hinamizawa and also an informer who provides Ōishi with information from the village."
    ),
    (
        "Akane Sonozaki",
        "Daughter to Oryo and mother to the Sonozaki sisters, she leads the Sonozaki family despite being disinherited for marrying an outsider."
    ),
    (
        "Yoshirou Sonozaki",
        "Is the owner of the toy store Da Vinci in Okinomiya that Mion frequents. He frequently lets Mion hold game tournaments in order to boost his store's revenue."
    ),
    (
        "Oryou Sonozaki",
        "Oryou is the grandmother of Mion and Shion as well as the current head of the Sonozaki family. Although usually harsh and vulgar during her dealings with people, she has a bit of a softer side that she rarely lets out."
    ),
    (
        "Miyo Takano",
        "Age: Mid 30s Birthday: June 20  Miyo is a nurse at the village clinic who has a keen interest in Hinamizawa's past and culture, recording all her speculation in notebooks. At times, her storytelling can be very mysterious and chilling—she seems to enjoy putting people on edge."
    ),
    (
        "Daiki Tomita",
        "Daiki Tomita is a student at the Hinamizawa Branch School."
    ),
    (
        "Jirou Tomitake",
        "Age: Late 30s Birthday: September 14  A photographer who frequently visits the village of Hinamizawa (especially during the Watangashi Festival).    Not much else is known about his personality."
    );

INSERT INTO
    MEDIA_TYPE (media_id, type_id)
SELECT
    media_id,
    1
FROM
    MEDIA
ORDER BY
    media_id DESC
LIMIT
    1;

INSERT INTO
    CHARACTER_MEDIA (character_id, media_id)
SELECT
    CHARACTERS.character_id,
    1
FROM
    CHARACTERS
    LEFT JOIN CHARACTER_MEDIA ON CHARACTERS.character_id = CHARACTER_MEDIA.character_id
WHERE
    CHARACTER_MEDIA.character_id IS NULL;

INSERT INTO
    MEDIA (name)
VALUES
    ("Nagi no Asu kara");

INSERT INTO
    CHARACTERS (name, description)
VALUES
    (
        "Chisaki Hiradaira",
        "Birthday: July 3  A mature and independent girl from the Land of Sea and one of the students from Shioshishio. She is very calm and doesn't seem to like fighting or bullying. She is also a childhood friend of Hikari, Manaka, and Kaname.    (Source: Wikipedia)"
    ),
    (
        "Sayu Hisanuma",
        "A third grade elementary school girl with brown haired pigtails and eyes. She is Miuna's best friend who often instigates confrontations with sea people."
    ),
    (
        "Kaname Isaki",
        "He is a childhood friend with Manaka, Chisaki, and Hikari. He is also the most level headed out of everyone in the group. He seems to be the only one that knows Chisaki has feelings for Hikari."
    ),
    (
        "Tsumugu Kihara",
        "A boy from the surface. At the start of the story, he accidentally fishes up Manaka and later befriends her. He's from a fisherman's family and likes the sea and the people living in it.   Tsumugu is a calm, collected, and solitary person. He is portrayed as being somewhere between merely stoic and matter-of-fact, rarely ever smiling or showing emotion at all. Tsumugu has a very inquiring mind when there is something he cares about, but at the same time, he had almost no tenacity of purpose, he prefers to observe then act. Despite his usually stoic demeanour, Tsumugu does have an emotional side, as he noted during his talk with Miuna, that he just doesn't know how to show it."
    ),
    (
        "Manaka Mukaido",
        "Birthday: March 5 Height: 152 cm Hair colour: auburn hair  The heroine, and the childhood friend of Hikari Sakishima who has been looked after by him since the two of them were young. Manaka is a middle school girl who is indecisive and prone to crying.       (Source: Wikipedia)"
    ),
    (
        "Hikari Sakishima",
        "Age: 14  One of four childhood friends from Shioshishio. He has a short temper and usually scolds Manaka for her mistakes even though he has deep feelings for her. He is the son of Shioshishio's Chief Priest that serves the Sea God. At first, he hates all people from the surface, but after learning about the relationships between the land and sea humans (through Akari and Itaru), he gradually understands that there is no difference between the people from the surface and the sea.    (Source: Wikipedia)"
    ),
    (
        "Miuna Shiodome",
        "Birthday: September 2  A third grade elementary school girl whose mother, Miori (originally from Shioshishio), died when she was young. She met Akari a couple of times and played with her when Akari came to visit Miuna's mom and the family. Sayu's best friend.    (Source: Wikipedia)"
    ),
    (
        "Takashi Egawa",
        "Friend of Hikari. Knocked a woman up later into the series, offscreen."
    ),
    (
        "Master",
        "The man who keeps the pub where Akari and her father meet several times."
    ),
    ("Atsushi Minegishi", ""),
    (
        "Ojoshi",
        "Ojoshi (usually referred to as Ojoshi-sama) was the first woman sacrificed to the Sea God, and became his wife. Uroko claims that the wooden figures of her are inaccurate, as the original Ojoshi-sama was freckled and frail."
    ),
    ("Akari Sakishima", "Hikari's older sister."),
    (
        "Shun Sayama",
        "Sayama is the former classmate of Hikari Sakishima. He helped to build the statue for the Ofunehiki alongside his best friend, Takeshi Egawa. He works at the Saya Mart."
    ),
    (
        "Yuu Seiki",
        "Often seen visiting the garbage disposal with Kaname."
    ),
    ("Akira Shiodome", ""),
    (
        "Miori Shiodome",
        "Deceased. Miori Shiodome is Miuna's mother and wife of Itaru."
    ),
    (
        "Uroko",
        "Uroko is the wise Lord of the village and makes sure everyone follows the laws of the sea, as well as providing spirit fire to the villagers.  A pervert that also enjoys drinking Sake, it's hard to take him seriously. Some characters have likened him to a God, but he claims he was merely a scale on the Sea God's shoulder blade."
    );

INSERT INTO
    MEDIA_TYPE (media_id, type_id)
SELECT
    media_id,
    1
FROM
    MEDIA
ORDER BY
    media_id DESC
LIMIT
    1;

INSERT INTO
    CHARACTER_MEDIA (character_id, media_id)
SELECT
    CHARACTERS.character_id,
    2
FROM
    CHARACTERS
    LEFT JOIN CHARACTER_MEDIA ON CHARACTERS.character_id = CHARACTER_MEDIA.character_id
WHERE
    CHARACTER_MEDIA.character_id IS NULL;

INSERT INTO
    MEDIA (name)
VALUES
    ("2.5-jigen no Ririsa");

INSERT INTO
    CHARACTERS (name, description)
VALUES
    (
        "Ririsa Amano",
        "Birthday: May 5  Lilysa is a first-year student who joins the manga club. Due to her passion for cosplay, she recruits Okumura to be her photographer. Like Okumura, she is also a fan of Liliel. She was first inspired to become a cosplayer when she visited a cosplay event.  (Source: Wikipedia)"
    ),
    (
        "Aria Kisaki",
        "Aria is a blonde girl with Gyaru fashion and a good figure.  She is really positive and bubbly, however when Okumura was concerned she was very suspicious of him- telling the other girls that he was dangerous even though he never did anything. She is also clumsy and is always losing her belongings.  (Source: 2.5 Dimensional Seduction Wiki)"
    ),
    (
        "Noa",
        "Nonoa is a rookie cosplayer who is a huge fan of Lilysa. She desperately wants to befriend her, but has trouble doing so due to her anxiety and insecurity.  (Source: Wikipedia)"
    ),
    (
        "Masamune Okumura",
        "17 years old and a second year highschool student, he is a full fleshed otaku and 'Liliel' is his waifu. He is the Manga Research Club's President and Ririsa's cameraman. He is Mikari childhood friend."
    ),
    (
        "Mikari Tachibana",
        "A classmate of Ririsa and a popular model with outstanding looks and style. Her nickname among her fans is “Mikarin'. She has had unrequited feelings for her childhood friend Okumura for 10 years, but because he has no interest in 3-dimensional girls, he hasn’t noticed her feelings."
    ),
    (
        "Mayuri Hanyuu",
        "Mayuri is the home economics teacher at Ririsa and Masamune's school, as well as the supervisor of the school's cosplay club. She is quite a beautiful and attractive woman who was once considered one of the four 'goddesses of cosplay', but Mayuri had to temporarily voluntarily go into hiding due to the fear that her cosplay interests would ruin her career as a teacher and respected member of society."
    );

INSERT INTO
    MEDIA_TYPE (media_id, type_id)
SELECT
    media_id,
    1
FROM
    MEDIA
ORDER BY
    media_id DESC
LIMIT
    1;

INSERT INTO
    CHARACTER_MEDIA (character_id, media_id)
SELECT
    CHARACTERS.character_id,
    3
FROM
    CHARACTERS
    LEFT JOIN CHARACTER_MEDIA ON CHARACTERS.character_id = CHARACTER_MEDIA.character_id
WHERE
    CHARACTER_MEDIA.character_id IS NULL;

INSERT INTO
    MEDIA (name)
VALUES
    ("K-On!");

INSERT INTO
    CHARACTERS (name, description)
VALUES
    (
        "Mio Akiyama",
        "Age: 16-18 Birthday: January 15 Height: 160 cm Weight: 54 kg Blood type: A Sign: Capricorn Favorite Music: jazz, moody instrumental music  Experience with playing musical instruments: Started playing bass in middle school after Ritsu suggested it to her. 3 years of experience. Family structure: Family of three, both parents. Typical household of an office worker. Dwelling: Single family detached home. Commute to school: Walking. Preferences in clothing: Pants over skirts. In summertime she likes to wear sleeveless clothes, such as tank tops. Her room: Clean and tidy. Chic room with simple door. Actually Mio wants to decorate her room with cute things, but she does not have any because she is self-conscious about them not suiting her and because she does not want to be teased when Ritsu comes over. Favourite food: Gateau au Chocolat (rich layered chocolate cake). Subjects she is good at: All subjects. She is always in the top 10 among all students of her grade. Subjects she is bad at: No subject in particular. Physical activity: Good at sports. Way to pass the time when alone: Studying. Weaknesses and dislikes: Scary stories. Stories about pain.  Mio is a shy girl who is in the light music club. She plays a left-handed, 3-Color Sunburst Fender Jazz Bass with a tortoiseshell pickguard, though is shown playing a Fender Precision Bass in the first manga volume. She uses D'Addario EXL160M medium bass strings. Her bass is given the name Elizabeth later in the anime. While she originally intended to join the literary club, she was forced into the light music club by her childhood friend and the club's president/drummer, Ritsu. She gets excellent grades in school and is often mature and strict especially where Ritsu is involved; her weakness is the macabre and horrific, and she is often incapacitated with fear when stories involving ghosts, blood, injuries, haunted houses, barnacles or other disturbing topics come up. She also has a fear of being in the spotlight and gets embarrassed easily, and is often subject to teasing from Ritsu and Sawako, their club adviser and eventual third-year homeroom teacher. Mio has long, straight black hair and gray eyes (that are angled slightly more than the other characters). She cites that she chose bass since it is not the center of attention in the band, unlike the guitarist. Mio is more technical when it comes to music, and Yui often comes to her when she is in need of more guitar tutorials.  Along with Yui, Mio is one of the band's main vocalists, though given her dislike of being center stage, she tries to avoid taking the lead vocal if possible, generally singing if Yui is unable to. She writes most of the songs, although they usually feature some odd and overly girlish lyrics like 'Light and Fluffy Time.' As she is left-handed, she becomes entranced whenever she sees left-handed instruments, because of their rarity. After their first live performance, the attractive Mio gained a huge fan following (in no small part due to an unfortunate accident that occurred at the end of the show), led by an infatuated former student council president. Also resulting from her sudden popularity, most of her classmates voted that she portray Romeo in their class play. Mio comes to greatly enjoy her time at university as she encounters many new experiences. She is also able to overcome some of her shyness and make new friends such as Sachi and Ayame."
    ),
    (
        "Yui Hirasawa",
        "Height: 156 cm Weight: 50 kg Blood Type: O Sign: Sagittarius Birthday: November 27 Age: 15-18  Favorite Music: Yui doesn't follow any particular style, and isn't picky. As long as she likes it, anything is OK. Experience with musical instruments: Castanets Family Structure: Family of four, both parents and younger sister (Ui). Father works for a trading company, gets a lot of overseas assignments and tends to be absent. Because the mother often travels overseas too (helping the father), the daughters have many opportunities to spend time alone together. Dwelling: Single family detached home. Commute to school: Walking. Preferences in clothing: Pants over skirts. Yui is relatively fashion conscious and likes styles featured in teen magazines. She also wears casual clothes such as shorts and T-shirts at home. Her room: Clean, because Ui cleans it. Yui likes small cute things, and keeps stuffed toys and such in her room. The room is painted in girly pastel and pink tones. Favorite food: Anything, as long as it's sweet and delicious. Subjects she is good at: Between low and average and can rarely pass test easily, but has a hard time with questionnaires. Subjects she is bad at: All of them Physical exercise: She can do it, but hates getting tired. Way to pass time when alone: Lazing around at home. Weaknesses and dislikes: Studying.  Main character, guitarist, lead vocalist. Having misunderstood that 'light music' equals 'easy music' (like whistling), she joined the Light Music Club and picked up guitar with absolutely no prior experience. She is the type of person who doesn't read manuals and relies on her own intuition and self-taught approaches.   Yui is the lead guitarist and split vocalist of the Light Music Club who plays a Heritage Cherry Sunburst Gibson Les Paul Standard electric guitar that she nicknames 'Gīta' (ギー太). Before she learned how to play the electric guitar, the only instrument she knew how to play was the castanets. She gets poor grades in school (though when properly coached, she can achieve astounding results), spaces out frequently, and is easily distracted by trivialities (mainly those she deems cute). Yui is a kind and friendly girl who holds no ill-will towards anyone. Yui has shoulder-length, brown hair (a little longer than Ritsu's) which she accessorizes with two yellow hair clips, and brown eyes. She has a huge liking for sweets and consumes them frequently (though she never gains weight, which is greatly envied by Mugi, Mio, and Sawako). She has a younger sister named Ui, who is very mature and acts as the 'older sister' of Yui, taking care of her while their parents are away on business trips. Despite her difficulties with distractions, Yui works extremely hard to get better at playing guitar. During performances, Yui plays with amazing energy and joy which usually results in great response from the audience.  As a musician, Yui has absolute pitch—she can tune her guitar perfectly without a tuner, which greatly impresses Azusa, who possesses far more experience with playing guitar than Yui. She has a very easy-going nature, but has incredible focus and retention when she has a clear goal in sight. Yui is still devoted to her band and will always practice hard enough for the club. At school, she has become quite admired for her great voice. However, she has been shown to forget her lyrics mid-performance on at least one occasion and exert herself too much, making her unable to perform sometimes. Mio was the lead vocalist at first, since Yui could not play the guitar and sing at the same time.   (Source: Wikipedia)"
    ),
    (
        "Tsumugi Kotobuki",
        "Birthday: July 2 Sign: Cancer Height: 157cm Weight: 53kg Blood type: O Age: 16-18  Favorite Music: Classical music. Experience with playing musical instruments: Started playing piano at age four. Picked up keyboard upon joining the Light Music Club. Family structure: Family of three, both parents. Father is a president of a company. There is a butler at the house. She is being treasured as the only daughter. Dwelling: Single-family home, a rather stately mansion. Commute to school: By train (she lives two train stops away from the school). Because being driven to and from school by car is embarrassing for her, she avoids it. Preferences in clothing: Skirts over pants. High society lady styles, such as elegant one piece dresses. Her room: Canopy bed, antique furniture and such, as expected of a rich girl's room. The room is decorated mostly according to her parents' tastes. Favorite food: She prefers traditional sweets such as daifuku (rice cakes with red bean jam filling) because she worries about calories and because western sweets are brought to her house all the time and she is tired of them. Subjects she is good at: If anything, humanities, though she is also above average at science and math. While she is a little weaker than Mio when it comes to math, her math skills are certainly above her grade level. Subjects she is bad at: No subject in particular. Physical activity: Tsumugi is gentle and quiet and as result she is not good at ball games and track-and-field athletics. However, she has a lot of arm strength and amazing hand grip. She is a very strong girl. Way to pass the time when alone: Elegant teatime Weaknesses and dislikes: She is a little worried about her predisposition to gain weight easily.      Tsumugi, often referred to as 'Mugi' by her friends, is a wealthy girl with a gentle and sweet personality who plays a Korg Triton Extreme 76-key keyboard, though she is also seen playing a Korg RK-100 keytar in the closing credits of the first season. She originally intended to join the choir club, but joins the light music club instead after receiving an invitation and encouragement from both Mio and Ritsu.Tsumugi is considered a piano prodigy since she has been playing the piano since she was four and has experience in winning various piano contests. Mugi has long, pale blonde hair, blue eyes, unusually large eyebrows, which apparently run in her family and a fair complexion that the other characters do not have, but she does not get sunburned. She is the daughter of a company president, and her family has several villas in various places around Japan (and even one in Finland). Since her father also owns a maid café, she often brings confectionery and an assortment of sweets and pastries to the club room, and she diligently makes tea with a tea set which is kept in their club room. Despite her wealth, she is fascinated by and finds joy in 'normal' activities, such as ordering fast food, sharing french fries with her club mates, holding down part-time jobs and haggling over prices. Tsumugi displays a rebellious streak occasionally, diverting from her normally well-behaved and mature demeanor to the surprise of the others. She also displays a childlike eagerness from time to time, and possesses unusually high strength, being able to effortlessly carry around her own keyboard, Ritsu's drums, amplifiers, and at one point beating an arm-wrestling game in an arcade.      Tsumugi is often entranced by the sight of two girls interacting closely together, sometimes imagining something more risqué in her head. The series sometimes indicates that Mugi has a crush on their teacher, Sawako Yamanaka. While a lot of things do not bother her, she is fairly conscious about her weight (just like Mio), and she gets a bit anxious when her family's staff start spoiling her friends during villa visits. She later begins learning how to play the guitar from Azusa. Tsumugi has a childhood friend several years younger than her named Sumire Saitō who is a daughter of the family that serves the Kotobuki household. Tsumugi grew up home schooled, and therefore spent very little time in the outside world. Because of their close friendship Sumire would purchase everyday items like manga for Tsumugi that she was not normally allowed to see. Tsumugi was rather taken by some of the yuri manga she received which may have influenced her later perceptions about relationships. When Sumire started high school, Tsumugi wanted her to experience the light music club on her own, but due to Sumire's shyness Tsumugi came up with the excuse to send her to the club room to pick up the tea sets that had been left there and told Sawako when Sumire did join that it was okay to leave the tea sets there.  (Source: Wikipedia)"
    ),
    (
        "Azusa Nakano",
        "Age: 15-17 Birthday: November 11 (Scorpio) Height: 150 cm Weight: 46 kg Blood type: AB Favorite music: western music, jazz Favorite food: cakes Subjects she is good at: above average in all subjects Subjects she is bad at: no subject in particular Athletic ability: above average. Hobbies: guitar practice. Weaknesses and dislikes: lax atmosphere of the Light Music Club.  Azusa is a new student who joins the Light Music Club as a rhythm guitarist. She plays a Fender Mustang MG69/MH/CAR electric guitar which she eventually names Muttan, but is also in possession of a Gibson Les Paul Custom 50th Anniversary Gold Top (as seen in episode 13). She is a self-proclaimed novice guitarist who has been playing the guitar since the fourth grade and whose parents play in a jazz band. She is in the same year and class as Yui's sister, Ui, and has quite a mysterious demeanor. She often finds herself bewildered by the tea parties and cosplaying aspects of the club when she would rather just practice, and is struck by how good the club's music sounds despite their problems and lack of practice. However, she has a certain weakness for cakes and can be calmed down rather easily, sometimes by just being petted. She is more serious than the other girls, and does not like to admit how she really feels; she could be described in part as a tsundere. She is constantly hugged by Yui and is nicknamed Azu-nyan after trying on a pair of cat ears and meowing.  In the band, she looks up to Mio the most due to her maturity and the fact that she is an experienced musician, even trying to give Mio chocolate on Valentine's Day. However, she sometimes unintentionally makes remarks concerning Mio's weaknesses, such as her weight. She also finds Mugi very beautiful, and envies her hair and large eyes, and later starts teaching her how to play guitar when the two are alone in the club room. Since joining, Yui comes to her for advice on playing guitar, as well as maintenance. She gets a tan extremely easily, once during their time at the beach and another during a music festival (even after applying sunscreen). As a result, she frequently gets sunburned as well. She gets lonely very easily, and often worries that everyone in the club will leave her, as they are one-year-older and eventually will graduate. Due to this, the rest of the girls buy her a turtle to look after, naming it Ton-chan.  She is interested in a wide range of genres without limiting herself to anything in particular. She started playing instruments in fourth grade of elementary school, which makes it about 5 years of experience. Her parents both play in a jazz band.  Outside of the band, she often hangs out with Ui and Jun whenever the other girls are busy. When the others graduate, she becomes the new Light Music Club president alongside Ui and Jun, who decide to join her. Together with two new members, Sumire and Nao, they form a new band called Wakaba Girls. During the Wakaba Girls' first summer training camp Azusa reveals to Sawako her belief that she is unable to act like a proper president for the Light Music Club; however, Sawako suggests that there is no proper way to define what it means to be a president and that Azusa will do just fine. While on that same training camp Azusa is convinced by the others to become the band's vocalist despite her prior reservations on the issue, and eventually overcomes her weakness to sing in the school festival.  Her preference in clothing includes pants over skirts. Short pants are among the things she likes to wear. Her room is very tidy and not excessively cute.  (Source: Wikipedia, K-On! Wiki, Blu-ray book page)"
    ),
    (
        "Ritsu Tainaka",
        "Birthday: August 21 Sign: Leo Height: 154 cm Weight: 48 kg Blood Type: B Favorite Music: Rock in general. Metal, punk, and other aggressive music is okay too. Beat is what counts. Experience with Playing Musical Instruments: Started playing in Middle School. Three years of experience. Family Structure: Family of four, both parents and a younger brother attending middle school. Average household of an office worker. She has no reservations about hanging out together with her brother. Dwelling: Single-family detached home. Commute to School: Walks (her house is in the same neighborhood as Mio's). Preferences in Clothing: Pants over skirts. She likes to wear polo shirts. Her Room: Messy to the point that there is no place to stand. Half-finished manga and snacks are scattered around. She tidies it up before it becomes a full-blown disaster, but it immediately becomes a mess again. Favorite food: Rice. Rice comes before snacks. She values food that fills the belly. Subjects She is Good at: Physical Education. Subjects She is Bad at: Everything else. Physical exercise: Her strong point. Way to Pass the Time When Alone: Reading manga. Weaknesses and Dislikes: Work that involves minute details, complex and fussy tasks.  Ritsu (or Ricchan, as nicknamed by Yui) is the self-proclaimed president of the light music club and plays a yellow Rick Marotta Signature Yamaha Hipgig drum kit with an add-on floor tom (in the opening credits only) combined with a cymbal set from Avedis Zildjian,though is shown playing a white Yamaha Absolute Series drum kit in the anime's closing credits.She has an ambiguous yet upbeat personality, much like Yui, but often has trouble remembering important club activities and announcements and gets constantly rebuked by Mio and Nodoka for forgetting to send in important forms concerning the club. Ritsu is cheerful, often likes making jokes and is sarcastic most of the time. She is skilled at brainstorming ideas that earn money for the club. Ritsu has shoulder-length, brown hair, with her bangs pulled back with a yellow hairband, and gold-colored eyes. She wears her school jacket open. She says she chose to play the drums because they are 'cool,' but she then admits that she has trouble playing instruments which involve intricate finger movements, such as the bass, guitar and keyboard.  She is a childhood friend of Mio and will often take the opportunity to tease her whenever Mio is cowering from something. She is also known to become easily jealous of Mio's other high school friends, even going as far as spying on Mio when on outings with them. Ritsu is always on the go and will stop at nothing for the success of the light music club. Despite her rough mannerisms and speech, she gets cast as Juliet by the majority of her classmates in their class play rendition of Romeo and Juliet and, in the end, manages to act like a proper girl. In the anime, she states her favorite drummer is Keith Moon of The Who. She is skilled at cooking. She has a younger brother named Satoshi.  (Source: Wikipedia)"
    ),
    ("Father Hirasawa", "Yui and Ui's father."),
    (
        "Mother Hirasawa",
        "Yui and Ui's mother. She is usually away with their father so Ui is left to do all of the chores and take care of Yui."
    ),
    (
        "Ui Hirasawa",
        "Birthday: February 22 Sign: Pisces Height: 154cm Weight: 50kg Blood type: O  Ui is Yui's younger sister, who begins the story as a third-year junior high school student, but later enters Yui's high school the following year in the same class as Azusa. Unlike her older sister, Ui is mature, responsible and handles household chores well, though she still shares a strong relationship with Yui and has a great deal of love and respect for her older sister. Despite being a year younger than Yui, she is nearly identical to her with her hair down and is even once able to fool the club. She possesses some of her sister's musical gift, and has a great talent for playing the guitar—she became capable of playing with the rest of the light music club band after only a few days of practice (Yui was sick, so Ui dressed up as Yui to help the band out). She takes particularly good care of Yui and strives to look after her even at the risk of her own health. Ui is actually considered as the ultimate groupie for her sister's band and supports them with all her heart. She occasionally provides a narrative to the story. She is in the same class as Azusa and hangs out with her sometimes.  (Source: Wikipedia)"
    ),
    (
        "Hitomi Hoshino",
        "A clerk at a fast food restaurant. Tsumugi is inspire to get a part-time job at the restaurant after seeing her, and she helps out Tsumugi as her senior."
    ),
    (
        "Nodoka Manabe",
        "Birthday: December 26 Sign: Capricorn Height: 158cm Weight: 52kg Blood type: A  Nodoka is Yui's childhood friend and confidant who is a member of the school's student council. As a normal, well-mannered and intelligent girl, she is generally taken aback by the light music club's odd behavior, and easily gets annoyed with Ritsu whenever she forgets to fill in the club's application forms. She shares the same class as Mio in their second year, who appreciates her companionship tremendously, as being the only person Mio knows in her class. In her third year, she becomes the student council president.  (Source: Wikipedia)"
    ),
    (
        "Megumi Sokabe",
        "Megumi was the president of the student council before Nodoka succeeds her in her third year, and she is also the president of Mio's fan club. She stalks Mio during her last few days in high school because she wanted to see Mio one more time. The band offers her a song as a graduation gift. She can be seen in episodes seven and eleven of the anime.  (Source: Wikipedia)"
    ),
    (
        "Jun Suzuki",
        "Jun is Azusa's and Ui's classmate who often hangs out with the latter. Ui tries to get her to join the light music club but ultimately fails due to a strange visit to the club room. However, she starts to regret it when she hears about all the activities the club does. She has a pet cat. She plays the bass.  (Source: Wikipedia)"
    ),
    (
        "Satoshi Tainaka",
        "Satoshi Tainaka is Ritsu Tainaka's younger brother. He appears when Ritsu is walking home with him from the movies. He then ventures of with a friend from school he saw on the way home. He seems to respect his sister Ritsu but still acts like a normal boy."
    ),
    (
        "Sawako Yamanaka",
        "Birthday: January 31 Sign: Aquarius Height: 165cm Weight: 56kg Blood type: B  Sawako is the adviser for the wind instrument club at Yui's school. An alumna of the school and a former member of the light music club, she does not want people to know she was formerly a member of a heavy metal band, thus she covers up by being mild and gentle to her co-workers and especially to students. She is forced to be the adviser of the light music club, as Ritsu blackmails her after the girls learn of her past, though it is unknown whether she stopped being the adviser for the wind instrument club as the story progresses. Though she has a mature and gentle demeanor in the school, Sawako, affectionately addressed as 'Sawa-chan' by both Ritsu and Yui, displays a totally different, completely authentic character when she is alone with the light music club. In reality, she is a rather wild, lazy and quite an irresponsible teacher who enjoys dressing up the light music club in, sometimes embarrassing, cosplay costumes, much to the dislike of Mio. She names the club band ''After School Tea Time'' after the members take too long deciding on a name themselves, and to maintain the secrecy on her heavy-metal image. She once momentarily pitches in for Yui with her Epiphone Flying V electric guitar.  (Source: Wikipedia)"
    );

INSERT INTO
    MEDIA_TYPE (media_id, type_id)
SELECT
    media_id,
    1
FROM
    MEDIA
ORDER BY
    media_id DESC
LIMIT
    1;

INSERT INTO
    CHARACTER_MEDIA (character_id, media_id)
SELECT
    CHARACTERS.character_id,
    4
FROM
    CHARACTERS
    LEFT JOIN CHARACTER_MEDIA ON CHARACTERS.character_id = CHARACTER_MEDIA.character_id
WHERE
    CHARACTER_MEDIA.character_id IS NULL;

INSERT INTO
    MEDIA (name)
VALUES
    ("Umineko no Naku Koro ni");

INSERT INTO
    CHARACTERS (name, description)
VALUES
    (
        "Beatrice",
        "Age: 1000+  Birthday: 29 November  Blood Type: O  Likes: Ice cream, black tea,   Dislikes: Boredom,   The Golden Witch and Endless Witch, and arguably the primary antagonist of the series. She is affectionately referred to as 'Beato.' She first appears in the 'Tea Party' of Legend of the Golden Witch, where she confronts Battler over his refusal to accept that his friends and family were killed by magic, and challenges him to a game in which he must prove otherwise from Turn of the Golden Witch onward.  A witch who has lived for over a thousand years, she is said to appear as a cloud of golden butterflies, and has the power to summon higher demons among the seventy-two pillars to serve her. It is said that humans can summon her to have their wishes granted in exchange for compensation, though she often acts whimsically. She is the one rumored to have given Kinzou ten tons of gold and served under him as the alchemic advisor to the Ushiromiya family.   (Source: 07th Expansion Wiki)"
    ),
    (
        "Kanon",
        "Age: 16 Birthday: October 6 Blood type: O Likes: Trimming roses, Lady Jessica Dislikes: Himself  A young servant of Kinzo's mansion. His real name is Yoshiya (嘉哉?). He is a serious and fervent servant, carrying out his master's orders thoroughly. He is a bit frail and antisocial. He considers Shannon as an older sister and highly disapproves of her feelings for George, as he believes she should not feel love as she is only furniture. He has feelings for Jessica, which he tries to hide from even himself, because he thinks of himself as 'furniture', rather than a human being. However, it is shown that he still deeply wishes to become a human being, and hopes to do so when he reaches the Golden Land. In Dawn Of the Golden Witch, he confesses to Jessica and they become a couple. He is willing to do whatever he can so he can be with Jessica as a human and be worthy of her love. Based on what Beatrice has shown Battler, he is able to use a red blade of light in battle and link with Shannon. Despite seeing himself to be in despair, he actually has surprisingly good relations with others on the island.    (Source: 07th Expansion Wiki)"
    ),
    (
        "Shannon",
        "Age: 16  Birthday: 25 May Race: Furniture  Likes: Sweets,   Dislikes: Herself  Shannon (Her real name is Sayo- 紗代) is a maidservant working on Rokkenjima. She has a habit of making mistakes and blunders when she is nervous, despite being an extremely talented and hardworking servant. She thinks of Kanon as her younger brother, and like him, she feels she is inferior to humans, as she is only furniture. Despite this, she has fallen in love with George.        (Source: 07th Expansion)"
    ),
    (
        "Ange Ushiromiya",
        "Famous quote: 'No person can become a replacement for another. Not even the past version of themselves.'   Birthday: 17 June 1980  Blood Type: A  Likes: Her family (especially her brother Battler), reading books  Dislikes: School, the world without her family  Rudolf and Kyrie's six-year-old daughter, and Battler's sister. She could not come to the island in 1986 due to a sickness.   Like her brother, she has a habit of saying, 'It's useless, it's all useless' during difficult situations.     (Source: 07th Expansion Wiki)"
    ),
    (
        "George Ushiromiya",
        "Birthday: 16 March 1963  Blood Type: B  Likes: Shannon, movies, martial arts  Dislikes: Natto, gossip  Eva and Hideyoshi's twenty-three-year-old son. He is the oldest of Kinzo's grandchildren, and an exceptional and diligent young adult. He was brought up by Eva specifically with the family headship in mind, and is also a skilled martial artist like his mother. He worked at his father's company as an apprentice throughout college, and respects his parents greatly, though he admittedly finds his mother overbearing. George is admired by everyone in his family, especially his cousins, who view him as their older brother and peacemaker. In his youth, however, he had been jealous of their more independent and impulsive lifestyles, particularly Battler, as unlike him, his mother made him do various things in his youth in order to shape him into the next head. As a result, he put up a more condescending mask towards his cousins, but has since outgrown this inferiority complex to a certain degree. He is in love with the maid Shannon and proposes to her (or at least intends to) in every game. Believing that his romance with a servant would be frowned upon by his family, however, he is fully willing and prepared to face the consequences.  (Source: 07th Expansion Wiki)"
    ),
    (
        "Battler Ushiromiya",
        "Birthdate: July 15, 1968 Horoscope: Cancer Blood type: O Likes: mystery novels Dislikes: high places, vehicles  Battler is the eighteen-year-old son of Rudolf and his first wife Asumu, and is generally considered to be the main protagonist of the series. He is extremely stubborn, and is afraid of 'shaky' transportation, fearing he might fall off a boat. At first glance, he appears to be hotheaded, cocky, and even a little perverted (given the fact that he tries to grope young ladies and even his cousin Jessica several times). However, he has a heart of gold he isn't afraid to show when the situation calls for it.  Battler is also an extremely rational young man, and has an extreme talent for deductive reasoning and thinking outside the box, described as 'flipping the chessboard' so that he may be able to predict the moves and motives of his opponents. Because of this, he does not believe in witches or magic. This causes some conflict with his cousin Maria, who has immersed herself in studies of the occult and believes strongly in witches, especially the Golden Witch Beatrice.     (Source: 07th Expansion Wiki)"
    ),
    (
        "Maria Ushiromiya",
        "Birthday: March 29, 1977  Blood type: O  Likes: Sakutarou, mama, candy  Dislikes: Studying, bad mama, spicy food  Maria is Rosa's daughter, and is the youngest of the cousins at nine years old. She has a habit of uttering 'uu-uu' at times, which frustrates Rosa greatly. Maria is also rather stubborn, and believes things easily, which isn't uncommon for someone her age. She has an interest in the occult, like her grandfather. She carries around a bag which is filled with occult items, such as a scorpion charm which wards off evil. She idolizes witches, and believes that they are there to bring people joy and happiness. In Maria's notebooks there are sketches of witches, and the witches are beautiful, fantastical creatures. It upsets Maria greatly when someone denies the existence of witches, especially Beatrice's existence. At certain times, Maria undergoes a personality change, and begins to laugh in an unnerving fashion. When she is in this mode, she acts rather condescendingly with regards to things about the occult, and will often call people like Battler 'stupid' for having little to no knowledge of such things.    (Source: 07th Expansion Wiki)"
    ),
    (
        "Jessica Ushiromiya",
        "Birthday: 25 August 1968  Blood Type: O  Likes: Music, antiques, Yoshiya-kun  Dislikes: Giving up, demons, carrots  Krauss and Natsuhi's eighteen-year-old daughter. She is an energetic young girl, serving as the student body president at her school, and even leading a rock band. If her father inherits the family fortune, she will become the heiress to the Ushiromiya family, although the family's patriarchal hierarchy denotes her future husband will become the next head. Jessica is tomboyish, feisty, and rebellious, much to the dismay of her mother, who insists she act more refined and ladylike. She dislikes her parents at times for the pressures they place on her regarding the family inheritance, which she has no interest in. However, she still shows concern for them deep down. She was born with weak bronchi, and occasionally suffers from asthma attacks. She is in love with Kanon, who tries to hide his own feelings from her, though she manages to reach out to him in Dawn of the Golden Witch, and they become a couple. She is willing to go to great lengths to gain Kanon's respect, and tries to avoid doing anything that could jeopardize that. Jessica is shown to be skilled with brass knuckles in Alliance of the Golden Witch.   (Source: 07th Expansion Wiki)"
    ),
    (
        "Juuza Amakusa",
        "Birthday: 1 April  Blood Type: Unknown  Likes: Smoking, animals  Dislikes: Women, children  Amakusa is a hot-blooded and open young man who cannot stand boredom and is hired by Okonogi as Ange's bodyguard.  He stands by Ange's side despite being originally hired by Eva, who grew to resent Ange. Due to his talkative nature, Eva fired him before her death.  He is skilled at operating many weapons. The events of Dawn of the Golden Witch suggest his loyalties lie more with Okonogi than with Ange.   (Source: 07th Expansion Wiki)"
    ),
    (
        "Asmodeus",
        "Representing the demon Asmodeus and the corresponding sin of Lust. Asmodeus' appearance is a girl with blonde, straight hair in two pony tails. She wants to fall in love, and is willing to sacrifice her life for the sake of it. She is the youngest of the 'Stakes of Purgatory.'"
    ),
    (
        "Beelzebub",
        "Representing the demon Beelzebub and the corresponding the sin of Gluttony. Beelzebub's appearance is a girl with short curly blond hair in two pony tails. She is a gourmet, and is willing to use even her own flesh if it is used to make a delicious meal. She is the second youngest of the 'Stakes of Purgatory.'"
    ),
    (
        "Belphegor",
        "Representing the demon Belphegor and the corresponding the sin of Sloth. Belphegor's appearance is a girl with long dark hair in a pony tail. She is hard working and sensible, to make her target fall all the harder. She is the middle child of the 'Stakes of Purgatory.'   (Source: Wikipedia)"
    ),
    (
        "Frederica Bernkastel",
        "Age: 1000+ Birthday: August 21 Likes: Dried plum black tea, getemono, spicy things Dislikes: Boredom,  Famous quote: 'When they're alive, you can enjoy watching them struggle. When they're dead, you can enjoy tearing out their guts. Tales are things you get to enjoy twice.'  Frederica Bernkastel is known as the Witch of Miracles. It is said that she resides in a world where concepts such as fate and probability can be visualized. Despite this, she has a pretty twisted personality and described herself as the 'cruelest witch in the world.'  Unlike other witches she has lifeless eyes. She appears to see Beatrice's game to solve her boredom, and unable to stand seeing the player getting tortured by Beatrice's game, she assists the player by giving some hints around the workings of the game. Her 'Magic of Miracles' allows her to reset a desperate situation as long as the probability of a favorable situation is not equal to zero (Similar to Hanyuu's power to reset time).  She wants to defeat Beatrice, regardless of the means used for this objective. Throughout Umineko no Naku Koro ni, she maintains an icy and aloof calm in most situations, though by the end of Alliance of the Golden Witch and throughout Umineko no Naku Koro ni Chiru, she is shown to be just as impish and playfully cruel as Lambdadelta.   (Source: 07th Expansion)"
    ),
    (
        "Chiester 00",
        "The Chiesters are bunny-girl servants summoned by Beatrice. It is said that there is no escape from the Chiesters attacks, and they can even locate and bring back a corpse. They have red eyes, bunny ears, and elaborate military-styled outfits. It is hinted that they are connected to Maria's three (originally four) rabbit toys.   She is named after the '00 buck' shotgun load. Chiester 00 wears a black uniform and has long blonde hair. She has an eyepatch over her left eye, and her left bunny-ear has a scar. As the leader of the summoned Chiesters, She is very composed and serious in her work. She is in charge of guard and recon.   (Source: Wikipedia)"
    ),
    (
        "Chiester 410",
        "The Chiesters are bunny-girl servants summoned by Eva Beatrice. It is said that there is no escape from the Chiesters attacks, and they can even locate and bring back a corpse. They have red eyes, bunny ears, and elaborate military-styled outfits. It is hinted that they are connected to Maria's three (originally four) rabbit toys.  She is named after the .410 Winchester shotgun. Chiester 410 wears a blue uniform and has short teal hair. Unlike Chiester 45, 410 has a childish, silly smile on her face most of the time. Her duty is the main sniper using the information from Chiester 45."
    ),
    (
        "Chiester 45",
        "The Chiesters are bunny-girl servants summoned by Beatrice. It is said that there is no escape from the Chiesters attacks, and they can even locate and bring back a corpse. They have red eyes, bunny ears, and elaborate military-styled outfits. It is hinted that they are connected to Maria's three (originally four) rabbit toys.  She is named after the .45 Winchester shotgun. Chiester 45 wears a red uniform and has long pink hair tied in two ponytails. She has a serious look most of the time. Her duty is battle control, information gathering and data mining, trajectory calculating and sending it to Chiester 410.  (Source: Wikipedia)"
    ),
    (
        "Eva-Beatrice",
        "Birthday: 21 October  Blood Type: A  Likes: Hideyoshi, George, martial arts, cooking  Dislikes: All reptiles but especially snakes, smoking  A witch who resides within Eva's heart. She represents all of Eva's dark desires from her childhood, including her greed for the Ushiromiya family inheritance; as such, she has the appearance of Eva as a young girl.  She first appears in Banquet of the Golden Witch, where she helps Eva solve the riddle of Beatrice's epitaph, leading to her discovery of Kinzo's hidden gold and her inheritance of the Ushiromiya family. As stipulated in the epitaph, Eva inherits the name 'Beatrice' and is granted the titles of Golden and Endless Witch, with Lambdadelta as her guardian. Eva-Beatrice is described by Ange as a 'black witch,' meaning she manipulates others through anger and hatred. In many ways, she is even crueler than the original Beatrice, using her Endless Magic to 'play' with her victims by killing them in bizarre ways (drowning in a sea of jelly, crushing under a mountain of cake) before resurrecting them and killing them again, repeating the cycle until she tires.  She is most likely the manifestation of all the Eva culprit theories similar to how Black Battler is the manifestation of all the Battler Culprit theories.  She is very mocking of others, repeatedly taunting them by saying, 'Heso demo kande shinjaebā?' (ヘソでも噛んで死んじゃえばぁ??, lit. 'Why don't you bite at your belly button and die?').   (Source: 07th Expansion Wiki)"
    ),
    (
        "Gaap",
        "Age: 1000+  Birthday: 4 October  Blood Type: Unknown  Likes: Pranks, handsome guys  Dislikes: Ugly guys  The 33rd highest ranking earl of hell named after the demon of the same name. She is a curly-haired woman wears a red dress and a hat with a pink bow. Quite flamboyant, Gaap loves to tease people and gives people random nicknames by shortening their names ('Riiche' for Beatrice, 'Lia' for Virgilia, etc.). She is one of Beatrice's friends, though she is greatly disliked by Virgilia. She draws power from the Abyss to summon holes that can lead anywhere, although there are limits. In battle, particularly against George in Alliance of the Golden Witch, she uses a combination of these portals and various kicks that stab with her sharp heels, overwhelming her opponent and keeping them from moving as they emerge from the portal in mid-air.   (Source: 07th Expansion Wiki)"
    ),
    (
        "Goat-headed Butlers",
        "They are the faithful servants of Beatrice, and their primary weapon of choice is a sword. Their physical strength is enormous but they lack the intelligence to do anything but faithfully follow orders. Of all the beings summoned by Beatrice, their rank is the lowest, and they can be killed by being shot in the head.  (Source: Wikipedia)    No voice actors have been added to this character. Help improve our database by searching for a voice actor, and adding this character to their roles ."
    ),
    (
        "Toshirou Gouda",
        "Birthday: 10 December  Blood Type: B  Likes: Crosswords, tea  Dislikes: Unrewarding work, monotonous work  Gohda is the head cook of Kinzo's mansion. Unlike the other servants in the mansion, he has been hired by Krauss and Natsuhi. Because of this, his rank is very low. He is extremely proud of his culinary skills. His previous employ was at a hotel, and due to his experience, he is ostentatious and looks down upon Shannon and Kanon.   (Source: Wikipedia, 07th Expansion)"
    ),
    (
        "Captain Kawabata",
        "Kawabata is the captain of a high-speed boat that sends the Ushiromiya family to Rokkenjima back and forth. After the murder incident on Rokkenjima, Kawabata held himself partially responsible for being unable to pick up the family sooner, in spite of the typhoon that otherwise prevented him from doing so. In 1998, he agrees to bring Ange to Rokkenjima in the hopes of finding closure.   (Source: Wikipedia)"
    ),
    (
        "Chiyo Kumasawa",
        "Birthday: 19 July  Blood Type: A  Likes: Mackerel cooking, mystery novels, noon naps  Dislikes: Rainy days, tuna  The elderly woman is a part-timer who, though she has quit her job several times along the way, has served the family for a great many years in total. She is crafty and more than competent when it comes to performing her duties, but because of her chattiness and love of rumors, she is not highly regarded as a servant.     (Source: 07th Expansion Wiki)"
    ),
    (
        "Sabakichi Kumasawa",
        "Sabakichi is one of Chiyo Kumasawa's sons who works as a fisherman on Niijima. Like his mother, he is big-hearted and carefree. Sabakichi is one of the relatives of the Rokkenjima murder incident's victims who Ange interrogates during her investigation.   (Source: Wikipedia)"
    ),
    (
        "Lambdadelta",
        "Famous quote: 'Both love and happiness are the same as the air. Even though it fills the world, if you don't understand it, it's the same as if it doesn't exist.'   Age: 1000+  Birthday: 20 June  Blood Type: Unknown  Likes: Candy bars  Dislikes: Boredom, being ignored  She is also known as the Most Powerful Witch in the Universe before losing to Bernkastel and is feared by most other witches, including Beatrice. She is quite childish and holds a grudge against Bernkastel for finally beating her in their last game, although she actually cares for her.  Her 'Magic of Certainty' allows her to kill anyone without fail as an absolute result, which bends the basic rule of Umineko magic requiring a risk. Like Bernkastel, she is a Voyager. She wishes for Battler and Beatrice to fight against each other for eternity as a part of a larger plot to have Bernkastel lose against her.  She has lived for a thousand years. As a witch, she embodies the concept that 'hard-workers are rewarded', and is very respected even by human beings. She doesn't flee from the human concept of witch. Hence, the power of hers, who is a being respected by human beings, is immeasurable. However, she is whimsical about whose efforts she will reward and, in many situations, the person who can please her more will be able to receive her smile.  Her tremendous and swiftly fierce power makes any kind of witch surrender in a moment. However, she seems to be reckless and it was thoroughly read by Bernkastel.   (Source: 07th Expansion Wiki)"
    ),
    (
        "Leviathan",
        "Representing the demon Leviathan  and the corresponding sin of envy, she is the second eldest of the Stakes of Purgatory, and the self-fashioned representative of the younger sisters to Lucifer.   By nature, she is a jealous, selfish crybaby who will do anything to win. Her otherwise brutal personality allows her to easily pinpoint the weaknesses of others. Unfortunately for her, she is clumsy at everything she does and always comes out last at everything she and her sisters do together.   Leviathan's appearance is a girl with wavy, middle-length green hair."
    ),
    (
        "Lucifer",
        "Representing the fallen angel Lucifer and the corresponding sin of Pride. Lucifer's appearance is a girl with straight black hair. She is haughty and disdainful, but in fact takes pleasure in surrendering. She is the eldest amongst all of the 'Stakes of Purgatory.'   (Source: Wikipedia)"
    ),
    (
        "Mammon",
        "Representing the demon Mammon and the corresponding sin of Greed. Mammon's appearance is a girl with long brown hair. She is extremely greedy, and will do anything to get what she wants. She is the third youngest of the 'Stakes of Purgatory.'"
    ),
    (
        "Terumasa Nanjou",
        "Birthday: 5 April  Blood Type: O  Likes: Chess, Western wine, cats  Dislikes: Dairy products, spicy food  Nanjo is Kinzo's personal physician and close friend. He is also Kinzo's opponent in chess.  (Source: Wikipedia, 07th Expansion Wiki)"
    ),
    (
        "Masayuki Nanjou",
        "Masayuki Nanjou is the son of Terumasa Nanjo who inherited his father's clinic on Niijima after his death in 1986. Due to his family's sensitivity to Terumasa's death, Masayuki is resentful of the media for its rather flippant depiction of the murder incident on Rokkenjima and prefers to keep quiet about it. He is interrogated by Ange during her own investigation of the incident, only opening up to her as a fellow victim who lost her family.  (Source: Wikipedia)"
    ),
    (
        "Tetsuro Okonogi",
        "Higurashi no Naku Koro ni:   Umineko no Naku Koro ni: He is the president of a company who has ties with Rudolf's and Hideyoshi's companies. Ange goes to question him about everything he knows of the Rokkenjima murders, despite suspecting that he may betray her. Although he had been hired by the Sumadera family to stall Ange and allow them to take control of her wealth, he proves himself to be Ange's fundamental ally in the end and allows her to escape, hiring Amakusa to protect her. He influences Ange greatly in her battle against Beatrice, particularly his belief that truth can only be obtained through love."
    ),
    (
        "Professor Ootsuki",
        "Ootsuki is the foremost Japanese member of the Witch Hunt, an international organization of occult enthusiasts dedicated to researching the tragedy on Rokkenjima from a magical perspective. However, their presence and activities are less than welcome by the surviving members of the victims on Rokkenjima, having stirred up the tabloids in a very unpleasant light. The name of this organization was borrowed from the English fan translation group for the game, also called 'Witch Hunt.'"
    ),
    (
        "Genji Ronoue",
        "Birthday: 10 June  Blood Type: A  Likes: Chess, drinking with friends  Dislikes: Nothing in particular  The head butler of Kinzo's mansion. He is said by Beatrice to be the first furniture Kinzo ever created, and is the person Kinzo trusts the most. He is implied to have a connection to Ronove. Very loyal and reliable, he also has a penchant for throwing knives. It is suggested that the demon Ronove assisted Kinzo in Genji's creation, and thus many hints are given about his connection to Ronove, one being his similar-sounding surname.   (Source: 07th Expansion Wiki)"
    ),
    (
        "Ronove",
        "Birthday: June 10 Blood Type: Unknown Likes: black tea, chess Dislikes: Nothing in particular  The 27th highest ranking earl of hell named after the demon of the same name. Ronove serves as Beatrice's butler and head furniture. He often serves black tea and cookies to Beatrice and her guests. Nonchalant, he often bears a mysterious smile that is hard to interpret, even for his master. Even though he is bound by contract with Beatrice, he does not hesitate to state facts to tease her. He shares a link with Genji Ronoue, similar to the one held by Virgilia and Chiyo Kumasawa. In Alliance of the Golden Witch, he engages Jessica in combat, where he utilizes barriers for both offense and defense, generating strong ones to both deflect attacks and launch enemies backwards. He can also use a special barrier that returns damage back to the attacker.  (Source: 07th Expansion Wiki)"
    ),
    (
        "Sakutaro",
        "Birthday: 9 March  Blood Type: Unknown  Likes: Maria, candy, chikuwa fish cakes  Dislikes: Getting covered in sticky drool  A stuffed lion doll handmade by Rosa and given to Maria for her birthday. He became Maria’s furniture when she gave him a soul through magic. His name was originally intended to be 'Sakura' (さくら?, based on a veiled reference to the manga and anime Cardcaptor Sakura), but since 'Sakura' is traditionally a female name, Maria derived from it and added the male suffix tarō (たろう?). In reality, Sakutaro is a normal stuffed animal who Maria simply imagines to be alive, viewing him as one of her most beloved friends. His vessel takes the shape of a simple lion cub, while his human form has the appearance of a young boy with blond hair, red eyes, an orange cap with pointed ears, and an oversized yellow jacket; he wears a red muffler given to him by Maria in both of his forms. He is innocent and shy, and often utters the phrase uryū (うりゅー?)  He is also incredibly popular among the Sisters of Purgatory, who never waste an opportunity to pounce and cuddle him all at once, much to his dismay. As furniture under a witch of Mariage Sorcière, he serves as a non-aggressive diplomat with the ability to produce barriers and negate magical attacks to protect Maria, though his defensive powers pale in comparison to more experienced furniture. In Alliance of the Golden Witch, Sakutaro is torn apart by Rosa in a fight with Maria and believed to be impossible for Beatrice to resurrect due to Rosa's refusal to accept him afterward. However, he still appears before Ange, who comes across and repairs the remains of his vessel and revives him. In Dawn of the Golden Witch, Sakutaro assists Maria against Erika the two argue over a trivial magic trick, and manages to arrange a truce. He later defends Maria against Kanon when he attempts to kill her, only to be disintegrated by Shannon's own shield, though he is restored in the end.   (Source: 07th Expansion Wiki)"
    ),
    (
        "Satan",
        "Representing the demon Satan and the corresponding sin of Wrath. Satan's appearance is a girl with short, curly pale hair. She is easily angered, but really wants someone to be angry with her. She is the third eldest of the 'Stakes of Purgatory.'    (Source: Wikipedia)"
    ),
    (
        "Kasumi Sumadera",
        "Kasumi is the daughter of the struggling Sumadera family, and Kyrie's younger sister. Since Kyrie was the original heiress to the Sumadera family, Kasumi spent her life like a very spoiled princess. But since Kyrie cut all ties to her family when she married into the Ushiromiya family, Kasumi was forced to take up the responsibility as the Sumadera heiress. Kasumi thus blames Kyrie for all the pressures she must now face, and loathes everything about her, including her daughter Ange. She is much more open and charitable than Kyrie, though not even that can mask her malicious envy. In 1998, Kasumi participates in a feud within the Sumadera family over who will control the vast wealth Ange holds as the head of the Ushiromiya family. She also hopes killing Ange will finally alleviate some of her hatred towards the deceased Kyrie. She and her men face off against Ange on Rokkenjima towards the end of Alliance of the Golden Witch, mocking her apparent studies in magic and destroying Maria's diary, all the while being seemingly manipulated by the spirit of Eva-Beatrice. She and her men are then mysteriously killed, supposedly by the Stakes of Purgatory Ange summoned in response to Kasumi's challenge to 'prove' the existence of magic."
    ),
    (
        "Rudolf Ushiromiya",
        "Birthday: 29 September  Blood Type: O  Likes: Women, diving  Dislikes: High places, vehicles  Kinzo's third child. He was known as a philanderer in his youth and had impregnated his business partner and old girlfriend Kyrie before he married his first wife Asumu. After Asumu's death, he immediately remarried with Kyrie, leading to a falling out with his son, who ran away from home for six years. Rudolf is still known to chat up young women from time to time, though this does not seem to disturb Kyrie. He seeks Kinzo's fortune to settle a court case in America. He is an avid lover of Western films and an impressive marksman.   (Source: 07th Expansion Wiki)"
    ),
    (
        "Rosa Ushiromiya",
        "Birthday: 3 June  Blood Type: O  Likes: Hot springs, sushi, travelling  Dislikes: When contacts don't come on time, urchin, going out during holidays  Kinzo's fourth child. As the youngest of her siblings, she has the least influence at the family conference. Her husband abandoned her shortly before the birth of her daughter and only child, Maria. Rosa is the president of a small design company, 'Anti-Rosa,' which has recently begun to flounder, and thus seeks out Kinzo's inheritance to pay off her co-endorsers. On the surface, Rosa appears to be the most sensible and soothing of all the siblings. However, as a result of being downtrodden by her older siblings in her childhood and forced to endure the pressures of a single mother, she frequently loses control of her emotions and responds violently to her daughter's childish behavior and overenthusiastic approach to the occult. While Rosa thought that Maria saying 'uu-uu' was charming for a while, she eventually grew frustrated with it, and often resorted to hitting her. Whenever Rosa hits Maria, Maria says that she has been taken over by 'the black witch.'   (Source: 07th Expansion Wiki)"
    ),
    (
        "Kinzou Ushiromiya",
        "Birthday: 17 August  Blood Type: O  Likes: Chess, alcohol, Beatrice, Western wine and books, caring for roses  Dislikes: Incompetence, defeat, hot-blooded men who flail about  The elderly head of the Ushiromiya family, and the owner of Rokkenjima.  Kinzo holds his children in contempt, viewing them as vultures ready to feast on his inheritance as soon as he dies (or at least when word of his death spread out). He rarely leaves his exceedingly vast study, which contains various commodities such as a bed, lavatory, and bath. He is also a rabid practitioner of black magic and the occult, his shelves lined with volumes upon volumes of grimoires. One of his most prominent obsessions is Beatrice, a witch he is said to have summoned and contracted for ten tons worth of gold.     (Source: 07th Expansion Wiki)"
    ),
    ("Beatrice Ushiromiya", ""),
    (
        "Eva Ushiromiya",
        "Birthday: 21 October  Blood Type: A  Likes: Hideyoshi, George, martial arts, cooking  Dislikes: All reptiles but especially snakes, smoking  Kinzo's second child. Under normal circumstances, she would have lost her place in the Ushiromiya family when she married, though she managed to retain her name on the family register when she had her husband Hideyoshi adopted into the family and gave birth to Kinzo's first grandchild, George. Eva is cheerful and mischievous, but also sinister and greedy. She is hostile towards her older brother Krauss, and rallies the other siblings against him in their fight for the family inheritance. She also looks down on Krauss's wife Natsuhi for not being related to the Ushiromiya family by blood. Because she believes George to be the rightful head of the Ushiromiya family, she is cruel towards the servant Shannon, as she suspects her of being his lover.  Despite her insidious personality, however, she treasures her husband and son more than anything, but fears that she is too domineering towards them. She is skilled in various martial arts, and said to be excellent at cooking.     (Source: 07th Expansion Wiki)"
    ),
    (
        "Kyrie Ushiromiya",
        "Birthday: 8 November  Blood Type: A  Likes: Effort, tea, wagashi  Dislikes: Every woman that approaches Rudolf  Rudolf's second wife. She is also one of Rudolf's business partners, always assisting him in shady dealings and keeping him in line when he gets out of hand. Kyrie and Battler have bonded more as close friends with a sibling-like relationship rather than mother and son, with Battler going as far as always calling her 'Kyrie-san.' She is known for her 'flip the chessboard' mentality, influencing Battler in this regard. She had actually dated Rudolf long before his first wife Asumu, who she envies for marrying Rudolf while she was still going out with him. They were pregnant at the same time, though Kyrie's son was believed to have been a stillborn when Asumu gave birth to her son Battler.    (Source: 07th Expansion Wiki)"
    ),
    (
        "Hideyoshi Ushiromiya",
        "Birthday: 25 November  Blood Type: B  Likes: Eva, warlords, yakitori  Dislikes: People with no ambition, liver  Hideyoshi is Eva's husband. He is the successful president of a chain of fast food restaurants. He's a very jovial man and manages to tone down the tension between the siblings during their various meetings. He seeks Kinzo's fortune due to people trying to buy all his shares. He speaks with a fake Kansai accent, which he is said to be too embarrassed to use against actual Kansai people.   (Source: 07th Expansion Wiki)"
    ),
    (
        "Krauss Ushiromiya",
        "Birthday: 26 February  Blood Type: O  Likes: Boxing, foreign exchange  Dislikes: Betrayal, raw carrots  Kinzo's first child. He is the next in line to inherit the family headship, and takes the initiative to lead the family conferences.     Due to his arrogant nature, he has made himself something of an enemy to the siblings, who see him as trying to monopolize Kinzo's fortune, and unanimously attempt to upstage him, though with little success. His daughter, Jessica, also has little respect for him, particularly due to the pressure he places on her to become (or at least marry) a suitable successor to the Ushiromiya family after him. He is a real estate investor, and is currently supplying his funds to a resort. However, he has been unable to carry out his plans, and thus his investments end in failure. Despite always swaggering about, Krauss holds genuine remorse for all the troubles he put his family through. He is known to have taken up boxing in his youth, and still possesses quite a bit of skill in that area. Unlike his siblings, he lives on Rokkenjima with his father, wife, and daughter.   (Source: 07th Expansion Wiki)"
    ),
    (
        "Natsuhi Ushiromiya",
        "Birthday: 30 July  Blood Type: A  Likes: Family, herbal tea  Dislikes: Filthy things, headaches  Krauss' wife. Born into a family of Shinto priests, Natsuhi discarded her old life when she married into the Ushiromiya family. She is a very proud woman who holds her new family's name in high regard, and is in charge of managing the family head house and family conferences. Unfortunately for her, all of her efforts are often undervalued by her husband, and she is often afflicted by headaches. She holds a bitter rivalry with Eva, who mocks her for not being related to the Ushiromiya family by blood.   As a mother, Natsuhi is incredibly strict towards her daughter Jessica, but only out of concern that she becomes an ideal heiress to the Ushiromiya family.   (Source: 07th Expansion Wiki)"
    ),
    (
        "Virgilia",
        "Age: 1000+  Birthday: 19 July  Blood Type: Unknown  Likes: Black tea, scones, mackerel  Dislikes: Rainy days  She was the previous Endless Witch before Beatrice, and was also her teacher.   Her new name (having passed her old one to her student) comes from the Divine Comedy character Virgil, who guides Dante through Hell and Purgatory to Beatrice, who is his guide through Heaven.   She is a silver-haired witch with great powers, despite surrendering most of them to Beatrice with the title of the 'Endless Witch'. Unlike Beatrice, Virgilia thinks that the powers of a witch should be used for good and not for selfish means.   She taught Beatrice the Endless Magic, and retired, believing that Beatrice would also devote herself for the people. At the same time that she was Beatrice's teacher, she also served as the magician of Beatrice's home. Because of that, Virgilia had come in contact with her with the position of a servant. It is said that this became her downfall, and invited Beatrice's arrogance and recklessness   She may be linked to Chiyo Kumasawa.   (Source: 07th Expansion Wiki)"
    );

INSERT INTO
    MEDIA_TYPE (media_id, type_id)
SELECT
    media_id,
    1
FROM
    MEDIA
ORDER BY
    media_id DESC
LIMIT
    1;

INSERT INTO
    CHARACTER_MEDIA (character_id, media_id)
SELECT
    CHARACTERS.character_id,
    5
FROM
    CHARACTERS
    LEFT JOIN CHARACTER_MEDIA ON CHARACTERS.character_id = CHARACTER_MEDIA.character_id
WHERE
    CHARACTER_MEDIA.character_id IS NULL;

INSERT INTO
    MEDIA (name)
VALUES
    ("Fate/stay night: Unlimited Blade Works");

INSERT INTO
    CHARACTERS (name, description)
VALUES
    (
        "Archer",
        "Master: Rin Toosaka Height: 187 cm Weight: 78 kg Affiliation: Rin Toosaka's Servant, Counter Guardians Armament: Mantle Likes: all kinds of housework (he denies it) Dislikes: a hero of justice Talents: fiddle with junks, all kinds of housework  He is the Servant of one of the series' main heroines, Rin Toosaka. Due to an incomplete summon, he apparently has no memory of his previous life or identity. Archer is sarcastic and cynical—but under his hardened exterior lies a complex and dark personality that unfolds throughout the story. Though skilled with ranged weapons, he can hold his own in melee combat. Archer considers Shirou Emiya's idealism to be weak and delusional, recognizing Shirou's mentality of 'wanting to save everyone' as naive and impossible.   (Source: Wikipedia)"
    ),
    (
        "Shirou Emiya",
        "Age: 17 Affiliation: Homurahara Academy, Year 2 class C Height: 167 cm Weight: 58 kg Servant: Saber Likes: housework Dislikes: Umekobucha  Talents: tinkering with junk, housework Famous quote: 'I don't want to regret anything. I want to make all the tragedies that happened into meaningful things by believing that my path is right.'  Shirou is the main character of Fate/stay night. He is a serious yet helpful, hardworking, and honest teenager. His hobbies include fixing a variety of broken things, from VCRs to stoves, as well as cooking and cleaning. He has some slight talent with sorcery, though he was discouraged by his foster father Kiritsugu Emiya from improving his gifts. He is initially confused about the Holy Grail War and attempts to irrationally shield others from danger, including his own Servant, Saber.  Shirou is unskilled in most traditional forms of sorcery, and his only effective magic is Reinforcement, the power to analyze the structural composition of objects and increase their effectiveness by understanding their chemical and physical makeup, such as the sharpness and durability of a sword and shield. However, he lacks mastery for even this simple spell, and his various applications of it are limited.   (Source: Wikipedia)"
    ),
    (
        "Saber",
        "Height: 154 cm Weight: 42 kg Three sizes: B73-W53-H76 Blood type: O Armaments: armor, sword Likes: well-structured meals, stuffed animals Dislikes: badly structured meals, dressing up too much Talents: gymnastic exercise, secretly good in all kinds of gambling Famous quote: 'There are no regrets. If one can be proud of one's life, one should not wish for another chance.'  Fate/stay night  Fate/Zero   (Source: Type Moon Wiki, Wikipedia)"
    ),
    (
        "Rin Toosaka",
        "Birthday: February 3 Classification: Human, Mage Height: 159 cm (Fate/stay night), 124 cm (Fate/Zero) Weight: 47 kg (Fate/stay night), 29 kg (Fate/Zero) Three sizes: B77-W57-H80 (Fate/stay night) Blood type: O Servant: Archer Likes: praise of her father, polishing jewelry, messing around with Shirou Dislikes: electronics Affiliation: Homurahara Academy, Year 2 class A Famous quote: 'The world is just another word for the things you value around you, right? That's something I've had since I was born. If you tell me to rule such a world, I already rule it.'  Rin is a model student and idol of Shirou's school. She barely talks to other students in her school and exhibits a desire to be left alone as exemplified by her tendency to stay on the school's rooftop, away from the rest of the students. She is secretly a Magus and a Master in the Fifth Holy Grail War. In the beginning of the anime, she summons Archer for her Servant, although she originally wanted to summon Saber. Rin is reared as the successor to her family's magecraft, instructed by her father Tokiomi Toosaka to prioritize sorcery over her own interests.  Two centuries ago, the Toosaka House, in collaboration with the estates of Makiri and Einzbern, helped found the Fuyuki Holy Grail Wars. The land of Fuyuki City, which possessed the second greatest spiritual power in all Japan, was owned by Rin's ancestor, Nagato Toosaka; at the behest of the Einzberns, he provided his property as battleground for present and future wars. Nagato was a kirishitan, as well as a pupil of Zelretch; these titles gave him considerable influence in both the Mage's Association and the Church, allowing the Toosaka family to participate in the Holy Grail Wars, free from harassment by either organization.  Rin was brought up as the successor to her family's magecraft, and was instructed by her father to prioritize magecraft over her own interests. Ten years ago, Tokiomi Toosaka was selected as a Master in the 4th Holy Grail War, and Rin was entrusted to take care of the Toosaka estate until his return. Her mother, Aoi Toosaka, was left in a debilitated state from the war, so her care was left to her guardian, Kirei Kotomine. After her father was killed, Rin continued to improve her sorcery with some guidance from Kirei Kotomine. To divert attention from her private life, Rin has diligently strived to earn the admiration of her peers, even though she is secretly stingy, tomboyish, and a slacker.  The rights to the Toosaka lands were inherited by Aoi after Tokiomi's death, and subsequently inherited by Rin after Aoi's death. Kirei managed them as Rin's guardian, and because of his foolhardy and coarse management, the majority of profitable properties ended up in the hands of others. It is possible that he believed the wealth was bad for her upbringing due to following the principles of humility and poverty.  Although Rin resents the sacrifices she has endured for the sake of tradition, she is fiercely competitive and eager to prove herself as a skilled and capable magus. She was immensely disappointed at summoning Archer and ended up in a quarrel with him; however, the duo soon reconciled, set aside their differences and quickly got along.   (Source: Wikipedia)"
    ),
    (
        "Assassin",
        "Master: Caster Height: 176 cm Weight: 63 kg  Birthplace: Japan Armament: Odachi Likes: flowers, birds, wind, moon Talents: sword Famous quote: 'My role is to guard this gate. I won't let you through alive, nor shall I let you out alive.'  He was summoned by Caster as a guardian and watchmen for the front gate of the Ryuudou Temple. As an improper servant, Assassin is entirely dependent on Caster for mana and cannot move freely beyond the grounds of the Ryuudou Temple. Furthermore, he lacks most of the usual parameters and abilities granted to his class. Because of his limited status, Assassin cares little for the Holy Grail, and outside of his duties to Caster, he only seeks to enjoy a decent sword fight.   (Source: Wikipedia)"
    ),
    (
        "Berserker",
        "Height: 253 cm Weight: 311 kg  The Servant of Illya, he is a swarthy giant with adamantine skin and gross brawn. He wields a colossal stone Axe-Sword, and is capable of causing massive destruction with the mere backlash of his swings. As a Berserker, he was stripped of his sanity and reason, acting feral and animalistic in combat. Berserkers are praised as members of the 'Strongest' class, though they are difficult to control. Illya, however, appears to have little trouble managing Berserker.   (Source: Wikipedia)"
    ),
    (
        "Caster",
        "Master: Souichirou Kuzuki  Height: 163 cm Weight: 51 kg BWH: 82-57-84 Affiliation: Souichirou Kuzuki's Servant Armament: none  Likes: men of few words and sincerity, girls in cute clothes Dislikes: muscles Talents: plotting, crafting Famous quote: 'If the Holy Grail has infinite wealth, it should not run out no matter how much we split it. Then can you not share the Holy Grail with those you trust?'  An honored guest of the Ryudou family, permitted to live at their temple until the preparations for her marriage have been finalized. A gorgeous and talented yet mysterious woman of high stature, her presence has attracted the attention of many trainee monks.  Caster is a heretic who has made a personal enemy out of Tohsaka due to her draining the townsfolk of mana and nearly killing them in the process. She is ruthless, talented and determined. Assassin guards the gate of her base of operations and is her Servant. Despite this, she shows a level of interest in all of the protagonists and desires to take Saber for her own.   Caster is one of the physically-weakest Servants and relies mostly on her powerful anti-Army magic, her Territory Creation skill and her skeletal golems when fighting her opponents. She does less well in single combat.   (Source: Wikipedia)"
    ),
    (
        "Kiritsugu Emiya",
        "Birthday: November 11, 1965 Height: 175 cm Weight: 67 kg Blood type: AB Servant: Saber Classifications: human, magus, master Likes: efficiency Spouse:  Daughter:  Talents: shooting, jobs involving destruction Sidearm: Thompson Contender chambered in .30-06 Springfield, in conjunction with his Mystic Code Origin Bullets, Calico M950 submachine gun, Walther WA2000 sniper fitted with AN/PVS4 thermal optics Famous quote: 'Even if I am to carry 'all the evils of this world,' it won't matter. If that can save the world, then I'd gladly accept it.'  Shirou's foster father and his savior from the aftermath of the massive Fuyuki fire. During his lifetime, Kiritsugu was disillusioned with becoming a Hero of Justice, a defender of humanity who could save everyone. Although he feels he failed to do so, his efforts were a source of inspiration for Shirou.  Prior to his fateful meeting with Shirou, Kiritsugu was notorious as the 'Magus Killer,' a freelancer who would hunt down heretical magi. Although he was a magus with Magic Circuits and abilities he was considered unorthodox in that he would utilize modern technology and weaponry along with his magecraft to track down and kill magi.  Although mentioned and seen in flashbacks in Fate/stay night, Kiritsugu is one of the main protagonists in its prequel Fate/Zero.  Due to his father, Norikata Emiya, fourth family head of the Emiya family and a magus who received a Sealing Designation, Kiritsugu lost his mother shortly after he was born. Father and son were on the run from the Mage's Association, and thus Kiritsugu spent his youth wandering around the world with his father."
    ),
    (
        "Taiga Fujimura",
        "Height: 165 cm Weight: 53 kg  She is an English teacher at Shirou's school, homeroom instructor of Shirou's class and the supervising teacher for the archery dojo. She is widely called 'Tiger,' a nickname she dislikes ('Taiga' and 'Tiger' sound similar in Japanese), though Shirou refers to her as 'Fuji-nee' (older sister Fuji). After Kiritsugu died, Taiga became Shirou's guardian and has been living with him for several years. Taiga and Shirou are very close, and she regards him as a younger brother.  She's initially distrustful of Saber, believing that 'some strange woman was trying to take Shirou from her' as she put it. She becomes exasperated whenever a new girl appears at Shirou's house, thinking he stashes girls at his house. Taiga always shows up for breakfast and dinner at Shirou's house to have some of Sakura's cooking, and always saves some scraps from breakfast for her lunch.   (Source: Wikipedia)"
    ),
    (
        "Gilgamesh",
        "Height: 182 cm (6'0') Weight: 68 kg Armament: armor Likes: himself, power Dislikes: snakes Famous quote: ''All the evils in the world'? Bring thrice as much if you want to stain me!'  An arrogant, selfish, and enigmatic Archer-class Servant. He appears familiar with Fuyuki City and claims to have a past relationship with Saber. Typically clad in an ornate golden armor, he possesses an immense number of Noble Phantasms, though none are representative of his true identity.  Gilgamesh is the great half-god, half-human king born from the union between the King of Uruk, Lugalbanda, and goddess Rimat-Ninsun. He ruled the Sumerian city-state of Uruk, the capital city of ancient Mesopotamia in the B.C. era. He was an ultimate, transcendent being so divine as to be two thirds god and one third human, and no others in the world could match him. He was a despot possessing high divinity who believed he was invincible. He is not merely a legend, and is said to have actually existed and ruled during the Sumer Dynasty five thousand years ago. He was the King of Heroes who possessed all things in the world, whose tale is recorded in mankind's oldest epic poem, the Epic of Gilgamesh which portrays Gilgamesh as a hero, destined to be king and achieve great feats, who is driven to meet his destiny, facing challenges together with his best friend Enkidu.  His title, King of Heroes, is not meant to call him a king who is a hero, but instead implies that he is the king over all heroes. He is mankind's oldest hero, the origin of all myths and model on which heroes are based, so his story is copied within the mythologies of all the countries of the world. The heroes of various myths are derived from his legend, so his Gate of Babylon possesses all of their Noble Phantasms. Though there are several heroes holding the title of 'King,' the King of Knights and King of Conquerors, he is the only one in all of heaven and earth crowned with the title of 'King of All Heroes.'   In Fate/kaleid liner PRISMA☆ILLYA, he's the Heroic Spirit sealed into the eighth Class Card. He manifests as his younger self due to Illya separating him from his shadow form half-way through his incarnation. While initially an adversary, he quickly becomes an ally to fulfill his objectives. Gilgamesh in his child form has a more easygoing attitude compared to his adult self. He asks Illya to call him Gil-kun."
    ),
    (
        "Gai Gotou",
        "He is one of Shirou Emiya's classmates in class 2-C at Homurahara Academy."
    ),
    (
        "Kane Himuro",
        "She is a student at Homurahara School. She is a friend of Yukika Saegusa and Kaede Makidera, they are known as Class 2-A's famed track girl trio and she generally plays the straight man of the group. She is the track team's high-jumping ace.  She is considerate and intelligent. She is the brains of the trio. She is quiet, reserved, and doesn't speak that much as well. She is Minori's best friend and has a passion for gossip, especially if it involves those around her.  (Source: Type-Moon Wikia)"
    ),
    (
        "Kirei Kotomine",
        "Born: December 28, 1967 Height: 185 cm (Fate/Zero), 193 cm (Fate/stay night) Weight: 82 kg Blood type: B Likes: misfortune Dislikes: trust Famous quote: 'People cannot change the past. All we can do, is accept our own actions. If you still wish to be burdened by your sins, let it show in your future actions. It is your choice how to perceive something that has already happened.'  Kotomine Kirei is the overseer of the Holy Grail War and resides at the church on top of the hill. He is callous and sarcastic, but also quite knowledgeable. As the supervisor of the Grail War, it is his duty to uphold the rules of the Holy Grail War, cover up any incidents that might expose the War to the public, and give sanctuary to any Masters who drop out. Both Tohsaka and Shirou appear to detest him, though in truth they don't seem to dislike him too much. Despite the enmity between the Mage's Association and the Church, Kotomine is a member of both organizations, which is presumably the reason he was chosen to be be the overseer.  Kotomine plays an important role in the unfolding events in all three routes, but the route that features him most heavily is the final one, Heaven's Feel where he takes an active role early on.  (Source: TV Tropes)"
    ),
    (
        "Souichirou Kuzuki",
        "A well-built man with angular glasses, Kuzuki is the strict homeroom instructor of Rin's class. He primarily lectures on World History, though he also holds classes in Ethics. Kuzuki is well respected among staff and students, but he is widely regarded as austere and impersonal.   (Source: Wikipedia)"
    ),
    (
        "Lancer",
        "Height: 185 cm Weight: 70 kg Armament: armor, spear Likes: women with strong will, irrational promises Dislikes: devious methods, betrayal Talents: fishing, diving, mountain climbing Famous quote: 'It should be natural for you to drink until dawn with someone you get along with, even if he may be your enemy.'  The first hostile Servant to appear in this story, Lancer is a fierce but balanced warrior who enjoys combating a worthy opponent. He has a playful attitude and takes a very carefree approach to life, but is quick to work himself into a frenzy during a heated battle. Lancers are hailed as the 'Most Agile' of Servant classes.   (Source: Wikipedia)"
    ),
    (
        "Leysritt",
        "She is Ilya's maid. Like Ilya, she has silky white hair and deep crimson eyes. Leysritt is skilled in combat, particularly with halberds, and she is able to sacrifice her life to manifest The Dress of Heaven, an artifact of the Einzbern family capable of limited applications of 'true magic,' miracles that can accomplish impossibilities beyond modern science or sorcery."
    ),
    (
        "Kaede Makidera",
        "Classification: Human Height: 163 cm Weight: 49 kg BWH: 72-56-78 Likes: wind chimes, competition Dislikes: Failure Affiliation: Homurahara Academy, Year 2 class A, track team  Kaede is a friend of Rin Toosaka and known at Homura academy as the leader of track team. Even though she wishes to be called 'Black Panther of Homura', her real nickname is simply 'Maki.'  (Source: Type-Moon Wikia)"
    ),
    (
        "Shinji Matou",
        "Sakura Matou's older brother, and a long-time friend of Shirou. Shinji is very popular as vice-captain of the archery dojo despite being chauvinistic and a narcissist. Like Rin Tohsaka, he is of a distinguished lineage of sorcerers, though the Matou blood has thinned and no longer produces heirs naturally capable of sorcery. Shinji feels uncomfortable with his sister's daily visits to Shirou's home. He has an open crush on Rin, but she does not return his favors.  (Source: Wikipedia)"
    ),
    (
        "Sakura Matou",
        "Affiliation: Homurahara Academy, Year 1 Age: 6 (Fate/Zero), 16 (Fate/stay night) Birthday: March 2 Height: 120 cm (Fate/Zero), 156 cm (Fate/stay night) Weight: 25 kg (Fate/Zero), 46 kg (Fate/stay night) BWH: 85-56-87 (Fate/stay night) Blood type: O Eye color: blue/purple (Fate/Zero), purple (Fate/stay night) Famous quote: 'No, you are strong, senpai. It's not because of your Magic Circuit or your talent, but because your mind is pure... I knew that from the first time I met you. I knew you would never betray anyone.'  A student in her first year of high school, Sakura is the sister of Shinji Mato. After Shirou's father Kiritsugu died, Sakura often visited Shirou's home to help him with his daily chores. She is outwardly shy and timid, but possesses great inner strength. Sakura has a long standing and obvious crush on Shirou Emiya.   (Source: Wikipedia)"
    ),
    (
        "Ayako Mitsuzuri",
        "A stellar athlete, and captain of the archery dojo. Ayako and Rin are actively competing to see who will be the first to snag a boyfriend. She is victimized by Rider or Caster early in the story and later found unconscious in an alleyway. In the anime, Ayako is seen with Shinji after her disappearance, although Shinji denies it when asked by Shiro. Ayako often asks Shirou to come to the archery dojo and watch them practice.   (Source: Wikipedia)"
    ),
    (
        "Rider",
        "Master: Shinji Matou  Height: 172 cm   Weight: 57 kg BWH: 88-56-84 Armament: dagger Likes: alcohol, reading, snakes  Dislikes: mirrors, measuring height Talents: horse riding, acrobats, stalker Famous quote: 'You appear to be a brave person, unlike my master. I shall kill you kindly.'    The Servant of Shinji, first seen scouting around Homurabara Academy. Rider is silent, sultry, and vigilant, never hesitating to shield her Master from harm. With Shinji incapable of lending any mana to her, she is forced to seek alternative means to augment her abilities. To compensate for her weakness, Rider employs covert battle tactics and takes full advantage of any territory around her. Her weapon of choice is a pair of long iron nails fastened to opposite ends of a single chain, which she effectively thrusts from distances."
    ),
    (
        "Issei Ryuudou",
        "Issei is the Student Body President of Shirou's school, and another close friend of Shirō. Issei often asks Shirō to fix broken equipment for the Student Body to try and save money on the school's bill. Issei and Shirō often have lunch together in the Student Body's office where they talk about what ever comes to mind. His father is the head priest of Ryūdōji Temple, and his brother was a classmate of Taiga and Neko-san. He dislikes Rin and seems to have some sort of fear of females, although he seems to be unusually at ease around Saber. Issei unknowingly tells Shirō that Caster is at the Temple.  (Source: Wikipedia)"
    ),
    (
        "Yukika Saegusa",
        "Classification: Human Weight: 39 kg Height: 155 cm BWH: 75-57-78 Likes: cooking, taking care of her brothers Dislikes: sports Affiliation: Homurahara Academy, Year 2 class A, track team  Yukika is a gentle, cheerful girl and the mascot of the famous Homura Academy track girl trio, along with Kaede and Kane. She also is one of the few non-magi who can see Assassin sitting in front of Ryuudou Temple.  (Source: Type-Moon Wikia)"
    ),
    (
        "Sella",
        "Sella is a Homunculus created by the Einzbern family to serve as a maid and to teach Illyasviel sorcery. Despite her appearance, she is only about two years old.  Like Ilya, she has silky blonde hair and deep crimson eyes. Sella is rather fickle and insecure (especially regarding her body), and is very suspicious of Shiro Emiya.   (Source: Type Moon Wikia, Wikipedia)"
    ),
    (
        "Illyasviel von Einzbern",
        "Age: 18 Birthday: November 20 Height: 133 cm Weight: 34 kg BWH: 61-47-62 Servant: Berserker Affiliation: Einzbern Classification: Homunculus Likes: snow Dislikes: cats Famous quote: 'I don't intend to kill you, Shirou. You're mine. I'll kill the other Masters, but you're special. That's why I locked you up here, so there won't be any interruptions.'  A young Teutonic aristocrat, she traveled to Japan to participate in the Holy Grail War as a Master. Illyasviel has an angelic appearance and an unsurpassed degree of magical power. She lives in a castle on the outskirts of Fuyuki City, accompanied only by her Servant and two maids. Illyasviel asks those she feels comfortable around to simply call her 'Illya.'  Fate/stay night  Fate/Zero Age: 8  Unlimited Blade Works  Fate/kaleid liner Prisma☆Illya Age: 10 Birthday: July 20  (Source: Wikipedia)"
    );

INSERT INTO
    MEDIA_TYPE (media_id, type_id)
SELECT
    media_id,
    1
FROM
    MEDIA
ORDER BY
    media_id DESC
LIMIT
    1;

INSERT INTO
    CHARACTER_MEDIA (character_id, media_id)
SELECT
    CHARACTERS.character_id,
    6
FROM
    CHARACTERS
    LEFT JOIN CHARACTER_MEDIA ON CHARACTERS.character_id = CHARACTER_MEDIA.character_id
WHERE
    CHARACTER_MEDIA.character_id IS NULL;

INSERT INTO
    USERS (user_name, email, password, nickname)
VALUES
    (
        "boiledcrudeness",
        "boiledcrudeness@gmail.com",
        "W7DwmAtYZzvr#ZMR",
        "boiledcrudeness"
    ),
    (
        "immoralgraph",
        "immoralgraph@gmail.com",
        "WiKUix66NIrpwWpy",
        "immoralgraph"
    ),
    (
        "federalvilla",
        "federalvilla@gmail.com",
        "w7sYgo1VlF&uEun9",
        "federalvilla"
    ),
    (
        "bogusdoorkeeper",
        "bogusdoorkeeper@gmail.com",
        "&XgctdMQgZeO6Knq",
        "bogusdoorkeeper"
    ),
    (
        "best-knownperti",
        "best-knownperti@gmail.com",
        "rUhjbAgcqKU4uys3",
        "best-knownperti"
    ),
    (
        "quiveringbusboy",
        "quiveringbusboy@gmail.com",
        "Smr92mblPtKHolXQ",
        "quiveringbusboy"
    ),
    (
        "exiledsyrup",
        "exiledsyrup@gmail.com",
        "IW&@763ctWId7m&L",
        "exiledsyrup"
    ),
    (
        "oncomingblueber",
        "oncomingblueber@gmail.com",
        "arbi@E4yls570hpV",
        "oncomingblueber"
    ),
    (
        "colouredrepatri",
        "colouredrepatri@gmail.com",
        "2fhGvD51yI8@HSja",
        "colouredrepatri"
    ),
    (
        "putativeassent",
        "putativeassent@gmail.com",
        "OSVmtfcDCdshIHOQ",
        "putativeassent"
    ),
    (
        "anti-abortionth",
        "anti-abortionth@gmail.com",
        "NR5rlMPGd&FMpnZF",
        "anti-abortionth"
    ),
    (
        "darlingconveyor",
        "darlingconveyor@gmail.com",
        "xc0QduSbsKJy3Trl",
        "darlingconveyor"
    ),
    (
        "multinationalpu",
        "multinationalpu@gmail.com",
        "plhR5sLB7Ud14mCH",
        "multinationalpu"
    ),
    (
        "checkeredladder",
        "checkeredladder@gmail.com",
        "VKJTvveltXei4Pce",
        "checkeredladder"
    ),
    (
        "averagejester",
        "averagejester@gmail.com",
        "JqODWGju1@b436AO",
        "averagejester"
    ),
    (
        "high-heeledmasq",
        "high-heeledmasq@gmail.com",
        "rArSqfx2HF1gS85v",
        "high-heeledmasq"
    ),
    (
        "balmyenthusiast",
        "balmyenthusiast@gmail.com",
        "j@WJzYAGh2rmgV5d",
        "balmyenthusiast"
    ),
    (
        "shiningstar",
        "shiningstar@gmail.com",
        "7o1R2yZIeXmpMKaT",
        "shiningstar"
    ),
    (
        "ceremonialscrol",
        "ceremonialscrol@gmail.com",
        "V5I!m1UyBHlHOXcI",
        "ceremonialscrol"
    ),
    (
        "sleazyratificat",
        "sleazyratificat@gmail.com",
        "FmwdN6i2Vm@KL5vJ",
        "sleazyratificat"
    ),
    (
        "degenerativesho",
        "degenerativesho@gmail.com",
        "tIZ!zQoYwJsDBpqE",
        "degenerativesho"
    ),
    (
        "safeinferno",
        "safeinferno@gmail.com",
        "VtgPsCyrQb5pLqZm",
        "safeinferno"
    ),
    (
        "spontaneousdisa",
        "spontaneousdisa@gmail.com",
        "2hozgd04afuuOE28",
        "spontaneousdisa"
    ),
    (
        "hopefulsalary",
        "hopefulsalary@gmail.com",
        "twW0ajVzRVTZYwLU",
        "hopefulsalary"
    ),
    (
        "governingindivi",
        "governingindivi@gmail.com",
        "D5OzZ#hft729sDPW",
        "governingindivi"
    ),
    (
        "rubberprofanity",
        "rubberprofanity@gmail.com",
        "9y7HJhZohT@49z#D",
        "rubberprofanity"
    ),
    (
        "medievalstateho",
        "medievalstateho@gmail.com",
        "BvpLO@SyXRK6Vqix",
        "medievalstateho"
    ),
    (
        "disadvantagedim",
        "disadvantagedim@gmail.com",
        "8b7suCf6O#mkcjR6",
        "disadvantagedim"
    ),
    (
        "rheumaticdelinq",
        "rheumaticdelinq@gmail.com",
        "XrSONrdKweu3GPC0",
        "rheumaticdelinq"
    ),
    (
        "imminentcatamar",
        "imminentcatamar@gmail.com",
        "RuqSY8Vd!@SzhgiP",
        "imminentcatamar"
    ),
    (
        "full-blownsweat",
        "full-blownsweat@gmail.com",
        "P1P6GXj2hap0!rQB",
        "full-blownsweat"
    ),
    (
        "untidyprop",
        "untidyprop@gmail.com",
        "5NXL1vrw8Bly3Ixb",
        "untidyprop"
    ),
    (
        "unadornedbirdba",
        "unadornedbirdba@gmail.com",
        "WknKgUnek8Biq3T5",
        "unadornedbirdba"
    ),
    (
        "candidgrandmast",
        "candidgrandmast@gmail.com",
        "DWVSbHqXyXn8MBYf",
        "candidgrandmast"
    ),
    (
        "incurableisland",
        "incurableisland@gmail.com",
        "M6!lBPeO04BICmlC",
        "incurableisland"
    ),
    (
        "rancidclinch",
        "rancidclinch@gmail.com",
        "HTujAOU8xaYWTNTE",
        "rancidclinch"
    ),
    (
        "uninterestingst",
        "uninterestingst@gmail.com",
        "cyykRnOv82TUYRVj",
        "uninterestingst"
    ),
    (
        "jumbosausage",
        "jumbosausage@gmail.com",
        "HFoKlxnMQR1TCzLk",
        "jumbosausage"
    ),
    (
        "franticplatform",
        "franticplatform@gmail.com",
        "qA2Sgyb3SuWJoxt@",
        "franticplatform"
    ),
    (
        "releasedpsychos",
        "releasedpsychos@gmail.com",
        "LrRBOk!cMXRI7N6t",
        "releasedpsychos"
    ),
    (
        "tritemanoeuvre",
        "tritemanoeuvre@gmail.com",
        "NamZ260H&hHhuFHq",
        "tritemanoeuvre"
    ),
    (
        "scheduledunderg",
        "scheduledunderg@gmail.com",
        "dmP!E4Xh0vx9x6cZ",
        "scheduledunderg"
    ),
    (
        "supersoniceleph",
        "supersoniceleph@gmail.com",
        "Ooa7iCiV3tx1&dqf",
        "supersoniceleph"
    ),
    (
        "prestigioustill",
        "prestigioustill@gmail.com",
        "Xiao4u6VEMZ9Ack0",
        "prestigioustill"
    ),
    (
        "traumaticwrestl",
        "traumaticwrestl@gmail.com",
        "kZBQOqIqBrU6MKrG",
        "traumaticwrestl"
    ),
    (
        "unconstitutiona",
        "unconstitutiona@gmail.com",
        "I7@M8bDLNrXI&&8b",
        "unconstitutiona"
    ),
    (
        "six-yearcalabas",
        "six-yearcalabas@gmail.com",
        "#Mq1a46DX08G8O1M",
        "six-yearcalabas"
    ),
    (
        "regrettablecove",
        "regrettablecove@gmail.com",
        "DcZ#PgOG3Dv2bJaJ",
        "regrettablecove"
    ),
    (
        "two-monthtonali",
        "two-monthtonali@gmail.com",
        "k4uNoX25XKRUGB2U",
        "two-monthtonali"
    ),
    (
        "nativebookshelf",
        "nativebookshelf@gmail.com",
        "R9Tn&XkMW0&3BJJD",
        "nativebookshelf"
    ),
    (
        "interestingspar",
        "interestingspar@gmail.com",
        "39ZmZb&65z5UWxWq",
        "interestingspar"
    ),
    (
        "ill-fittingsalo",
        "ill-fittingsalo@gmail.com",
        "FqzfhwH3cl#xMq4X",
        "ill-fittingsalo"
    ),
    (
        "disapprovingplu",
        "disapprovingplu@gmail.com",
        "tGVPM43RytTN@BUk",
        "disapprovingplu"
    ),
    (
        "stainedscepter",
        "stainedscepter@gmail.com",
        "PF4YEH#Y3nWnfQ1X",
        "stainedscepter"
    ),
    (
        "poignantportrai",
        "poignantportrai@gmail.com",
        "Uz185MKxOkplPOPX",
        "poignantportrai"
    ),
    (
        "funnymaking",
        "funnymaking@gmail.com",
        "YzX3zhNHEbpsi#JZ",
        "funnymaking"
    ),
    (
        "sentimentaltund",
        "sentimentaltund@gmail.com",
        "XAoLrH67&tSWPotB",
        "sentimentaltund"
    ),
    (
        "fastidiousnegot",
        "fastidiousnegot@gmail.com",
        "L7ffJ0Q1inFLUu8n",
        "fastidiousnegot"
    ),
    (
        "indestructiblec",
        "indestructiblec@gmail.com",
        "GQACSqQ11aKtpHUv",
        "indestructiblec"
    ),
    (
        "surprisedcrush",
        "surprisedcrush@gmail.com",
        "fpt5LquRgdVW7TBj",
        "surprisedcrush"
    ),
    (
        "opticalantholog",
        "opticalantholog@gmail.com",
        "2Worl@xWtYxtD0I#",
        "opticalantholog"
    ),
    (
        "top-levelchalic",
        "top-levelchalic@gmail.com",
        "@zSYF#!khBkjg@hu",
        "top-levelchalic"
    ),
    (
        "hillyclip",
        "hillyclip@gmail.com",
        "83#AxuyY78JrDd&e",
        "hillyclip"
    ),
    (
        "profoundholding",
        "profoundholding@gmail.com",
        "S7c2b7XDy#rBcjuP",
        "profoundholding"
    ),
    (
        "machine-gunstra",
        "machine-gunstra@gmail.com",
        "iAWEoZD46OFjmZ8e",
        "machine-gunstra"
    ),
    (
        "candidconvictio",
        "candidconvictio@gmail.com",
        "rVlbpT8HPtVnSn3z",
        "candidconvictio"
    ),
    (
        "untappedclassro",
        "untappedclassro@gmail.com",
        "6ZugtZsrurUDEFKk",
        "untappedclassro"
    ),
    (
        "soakedmagpie",
        "soakedmagpie@gmail.com",
        "tifwew#dP6EhxHYV",
        "soakedmagpie"
    ),
    (
        "printedlath",
        "printedlath@gmail.com",
        "b2vZGYxjk1U&Gygz",
        "printedlath"
    ),
    (
        "cooltramp",
        "cooltramp@gmail.com",
        "GbcJL8tHK!nlFFpy",
        "cooltramp"
    ),
    (
        "evolutionarypre",
        "evolutionarypre@gmail.com",
        "CDA6Mf#9ZJGfZ83M",
        "evolutionarypre"
    ),
    (
        "chillingtank",
        "chillingtank@gmail.com",
        "lyJ8Knrwy@25rbfc",
        "chillingtank"
    ),
    (
        "unwrittensquabb",
        "unwrittensquabb@gmail.com",
        "NLu6q5JCla!rJldy",
        "unwrittensquabb"
    ),
    (
        "absurddesecrati",
        "absurddesecrati@gmail.com",
        "d2@8sL24cPJJwrAc",
        "absurddesecrati"
    ),
    (
        "marchinglurcher",
        "marchinglurcher@gmail.com",
        "Bz0jddpsmmfpkKHz",
        "marchinglurcher"
    ),
    (
        "climacticsmokes",
        "climacticsmokes@gmail.com",
        "21pQRhkd4ZFXt9pM",
        "climacticsmokes"
    ),
    (
        "drunknavigator",
        "drunknavigator@gmail.com",
        "kyh64QD47B7y5B#k",
        "drunknavigator"
    ),
    (
        "widespreadspeak",
        "widespreadspeak@gmail.com",
        "U0RKq4#7ytKaOpuI",
        "widespreadspeak"
    ),
    (
        "incredulouswork",
        "incredulouswork@gmail.com",
        "RxCPQ03KycBg&V#9",
        "incredulouswork"
    ),
    (
        "observedmortuar",
        "observedmortuar@gmail.com",
        "3Uz23BVSRvlPbCb5",
        "observedmortuar"
    );

INSERT INTO
    POST (title, date, photographer, description)
VALUES
    (
        "This is my version of this character",
        NOW(),
        "balmyenthusiast",
        "Lorem ipsum"
    ),
    (
        "Check out my new post",
        NOW(),
        "uninterestingst",
        "Lorem ipsum"
    ),
    (
        "I did a new cosplay",
        NOW(),
        "anti-abortionth",
        "Lorem ipsum"
    ),
    (
        "Check out my new cosplay",
        NOW(),
        "checkeredladder",
        "Lorem ipsum"
    ),
    (
        "This is my version of this character",
        NOW(),
        "funnymaking",
        "Lorem ipsum"
    ),
    (
        "Check out my new cosplay",
        NOW(),
        "quiveringbusboy",
        "Lorem ipsum"
    ),
    (
        "Look at my new cosplay",
        NOW(),
        "marchinglurcher",
        "Lorem ipsum"
    ),
    (
        "My new cosplay",
        NOW(),
        "uninterestingst",
        "Lorem ipsum"
    ),
    (
        "Look at my new cosplay",
        NOW(),
        "poignantportrai",
        "Lorem ipsum"
    ),
    (
        "Check out my new post",
        NOW(),
        "boiledcrudeness",
        "Lorem ipsum"
    ),
    (
        "My version of this character",
        NOW(),
        "releasedpsychos",
        "Lorem ipsum"
    ),
    (
        "Check out my new cosplay",
        NOW(),
        "opticalantholog",
        "Lorem ipsum"
    ),
    (
        "I did a new cosplay",
        NOW(),
        "chillingtank",
        "Lorem ipsum"
    ),
    (
        "I did a new post",
        NOW(),
        "two-monthtonali",
        "Lorem ipsum"
    ),
    (
        "This is my new cosplay",
        NOW(),
        "governingindivi",
        "Lorem ipsum"
    ),
    (
        "I did a version of this character",
        NOW(),
        "multinationalpu",
        "Lorem ipsum"
    ),
    (
        "I did a new post",
        NOW(),
        "high-heeledmasq",
        "Lorem ipsum"
    ),
    (
        "Check out my version of this character",
        NOW(),
        "nativebookshelf",
        "Lorem ipsum"
    ),
    (
        "Look at my new cosplay",
        NOW(),
        "best-knownperti",
        "Lorem ipsum"
    ),
    (
        "I did a new cosplay",
        NOW(),
        "traumaticwrestl",
        "Lorem ipsum"
    ),
    (
        "I did a new post",
        NOW(),
        "governingindivi",
        "Lorem ipsum"
    ),
    (
        "Check out my new post",
        NOW(),
        "fastidiousnegot",
        "Lorem ipsum"
    ),
    (
        "Check out my version of this character",
        NOW(),
        "averagejester",
        "Lorem ipsum"
    ),
    (
        "Check out my version of this character",
        NOW(),
        "exiledsyrup",
        "Lorem ipsum"
    ),
    (
        "Look at my new cosplay",
        NOW(),
        "candidconvictio",
        "Lorem ipsum"
    ),
    (
        "Check out my new post",
        NOW(),
        "six-yearcalabas",
        "Lorem ipsum"
    ),
    (
        "My new post",
        NOW(),
        "imminentcatamar",
        "Lorem ipsum"
    ),
    (
        "My version of this character",
        NOW(),
        "drunknavigator",
        "Lorem ipsum"
    ),
    (
        "My new post",
        NOW(),
        "sleazyratificat",
        "Lorem ipsum"
    ),
    (
        "I did a new post",
        NOW(),
        "hopefulsalary",
        "Lorem ipsum"
    ),
    (
        "This is my version of this character",
        NOW(),
        "sentimentaltund",
        "Lorem ipsum"
    ),
    (
        "Check out my new cosplay",
        NOW(),
        "scheduledunderg",
        "Lorem ipsum"
    ),
    (
        "My new cosplay",
        NOW(),
        "franticplatform",
        "Lorem ipsum"
    ),
    (
        "My new cosplay",
        NOW(),
        "exiledsyrup",
        "Lorem ipsum"
    ),
    (
        "This is my new cosplay",
        NOW(),
        "putativeassent",
        "Lorem ipsum"
    ),
    (
        "Check out my new post",
        NOW(),
        "oncomingblueber",
        "Lorem ipsum"
    ),
    (
        "Look at my version of this character",
        NOW(),
        "checkeredladder",
        "Lorem ipsum"
    ),
    (
        "My version of this character",
        NOW(),
        "rancidclinch",
        "Lorem ipsum"
    ),
    (
        "I did a new cosplay",
        NOW(),
        "uninterestingst",
        "Lorem ipsum"
    ),
    (
        "I did a version of this character",
        NOW(),
        "drunknavigator",
        "Lorem ipsum"
    );

INSERT INTO
    COSPLAY_IN_POST (post_id, user_name, character_id)
VALUES
    (1, "averagejester", 64),
    (2, "nativebookshelf", 98),
    (3, "degenerativesho", 125),
    (4, "quiveringbusboy", 30),
    (5, "machine-gunstra", 38),
    (6, "supersoniceleph", 16),
    (7, "six-yearcalabas", 54),
    (8, "disapprovingplu", 123),
    (9, "boiledcrudeness", 70),
    (10, "tritemanoeuvre", 12),
    (11, "profoundholding", 42),
    (12, "opticalantholog", 67),
    (13, "exiledsyrup", 44),
    (14, "high-heeledmasq", 98),
    (15, "surprisedcrush", 14),
    (16, "balmyenthusiast", 38),
    (17, "darlingconveyor", 137),
    (18, "evolutionarypre", 38),
    (19, "climacticsmokes", 15),
    (20, "medievalstateho", 5),
    (21, "putativeassent", 16),
    (22, "scheduledunderg", 41),
    (23, "colouredrepatri", 16),
    (24, "high-heeledmasq", 118),
    (25, "high-heeledmasq", 73),
    (26, "prestigioustill", 117),
    (27, "surprisedcrush", 129),
    (28, "putativeassent", 27),
    (29, "full-blownsweat", 92),
    (30, "surprisedcrush", 132),
    (31, "prestigioustill", 54),
    (31, "interestingspar", 88),
    (32, "putativeassent", 104),
    (32, "governingindivi", 55),
    (33, "boiledcrudeness", 99),
    (33, "soakedmagpie", 19),
    (34, "unconstitutiona", 130),
    (34, "immoralgraph", 112),
    (35, "boiledcrudeness", 65),
    (35, "uninterestingst", 96),
    (36, "cooltramp", 86),
    (36, "two-monthtonali", 125),
    (37, "machine-gunstra", 13),
    (37, "sleazyratificat", 29),
    (38, "hopefulsalary", 50),
    (38, "opticalantholog", 65),
    (39, "opticalantholog", 106),
    (39, "widespreadspeak", 137),
    (40, "stainedscepter", 7),
    (40, "disadvantagedim", 24);

INSERT INTO
    COMMENT (post_id, user_name, date, message)
VALUES
    (35, "jumbosausage", NOW(), "Great cosplay!"),
    (16, "oncomingblueber", NOW(), "Amazing!!"),
    (26, "shiningstar", NOW(), "You look so good OMG"),
    (19, "untappedclassro", NOW(), "Wow!"),
    (19, "exiledsyrup", NOW(), "You look so good OMG"),
    (27, "rancidclinch", NOW(), "Great cosplay!"),
    (13, "disapprovingplu", NOW(), "Amazing!!"),
    (
        39,
        "full-blownsweat",
        NOW(),
        "How did you you do this?"
    ),
    (39, "shiningstar", NOW(), "SCREAMS!"),
    (
        29,
        "rheumaticdelinq",
        NOW(),
        "How did you you do this?"
    ),
    (7, "widespreadspeak", NOW(), "Amazing!!"),
    (
        26,
        "bogusdoorkeeper",
        NOW(),
        "I love this character!"
    ),
    (24, "oncomingblueber", NOW(), "I'm speechless"),
    (27, "high-heeledmasq", NOW(), "I'm speechless"),
    (
        4,
        "putativeassent",
        NOW(),
        "I love this character!"
    ),
    (
        31,
        "unconstitutiona",
        NOW(),
        "How did you you do this?"
    ),
    (
        9,
        "federalvilla",
        NOW(),
        "How did you you do this?"
    ),
    (
        40,
        "top-levelchalic",
        NOW(),
        "You look so good OMG"
    ),
    (40, "unconstitutiona", NOW(), "I'm speechless"),
    (15, "regrettablecove", NOW(), "Wow!"),
    (38, "interestingspar", NOW(), "Wow!"),
    (
        28,
        "two-monthtonali",
        NOW(),
        "I love this character!"
    ),
    (
        34,
        "climacticsmokes",
        NOW(),
        "You look so good OMG"
    ),
    (27, "immoralgraph", NOW(), "So great!"),
    (
        14,
        "cooltramp",
        NOW(),
        "How did you you do this?"
    ),
    (26, "disadvantagedim", NOW(), "Great cosplay!"),
    (22, "balmyenthusiast", NOW(), "Amazing!!"),
    (
        11,
        "franticplatform",
        NOW(),
        "You look so good OMG"
    ),
    (7, "immoralgraph", NOW(), "SCREAMS!"),
    (
        22,
        "full-blownsweat",
        NOW(),
        "That looks insane!"
    ),
    (5, "exiledsyrup", NOW(), "You look so good OMG"),
    (
        27,
        "balmyenthusiast",
        NOW(),
        "You look so good OMG"
    ),
    (
        17,
        "traumaticwrestl",
        NOW(),
        "You look so good OMG"
    ),
    (16, "two-monthtonali", NOW(), "Great cosplay!"),
    (19, "printedlath", NOW(), "Amazing!!"),
    (
        11,
        "safeinferno",
        NOW(),
        "How did you you do this?"
    ),
    (6, "poignantportrai", NOW(), "Wow!"),
    (
        5,
        "darlingconveyor",
        NOW(),
        "I love this character!"
    ),
    (18, "chillingtank", NOW(), "Amazing!!"),
    (21, "unwrittensquabb", NOW(), "Great cosplay!");
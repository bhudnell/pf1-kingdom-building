export type LotType =
	| 'Academy L'
	| 'Academy R'
	| 'Academy T'
	| 'Academy B'
	| 'Alchemist'
	| 'Arena TL'
	| 'Arena TR'
	| 'Arena BL'
	| 'Arena BR'
	| 'Bank'
	| 'Bardic_College L'
	| 'Bardic_College R'
	| 'Bardic_College T'
	| 'Bardic_College B'
	| 'Barracks'
	| 'Black_Market'
	| 'Brewery'
	| 'Bridge_1_H'
	| 'Bridge_1_V'
	| 'Bridge_2_L'
	| 'Bridge_2_R'
	| 'Bridge_2_T'
	| 'Bridge_2_B'
	| 'Bridge_3_H'
	| 'Bridge_3_V'
	| 'Bureau L'
	| 'Bureau R'
	| 'Bureau T'
	| 'Bureau B'
	| "Caster's_Tower"
	| 'Castle TL'
	| 'Castle TR'
	| 'Castle BL'
	| 'Castle BR'
	| 'Cathedral TL'
	| 'Cathedral TR'
	| 'Cathedral BL'
	| 'Cathedral BR'
	| 'Cistern'
	| 'Dance Hall'
	| 'Dump'
	// 'Everflowing Spring' |
	| 'Exotic_Artisan'
	| 'Foreign_Quarter TL'
	| 'Foreign_Quarter TR'
	| 'Foreign_Quarter BL'
	| 'Foreign_Quarter BR'
	| 'Foundry L'
	| 'Foundry R'
	| 'Foundry T'
	| 'Foundry B'
	| 'Garrison L'
	| 'Garrison R'
	| 'Garrison T'
	| 'Garrison B'
	| 'Granary'
	| 'Graveyard'
	| 'Guildhall L'
	| 'Guildhall R'
	| 'Guildhall T'
	| 'Guildhall B'
	| 'Herbalist'
	| 'Hospital L'
	| 'Hospital R'
	| 'Hospital T'
	| 'Hospital B'
	| 'House'
	| 'Inn'
	| 'Jail'
	| 'Library'
	| 'Luxury_Store'
	| 'Magic_Shop'
	| 'Magical_Academy L'
	| 'Magical_Academy R'
	| 'Magical_Academy T'
	| 'Magical_Academy B'
	// 'Magical Streetlamps' |
	| 'Mansion'
	| 'Market L'
	| 'Market R'
	| 'Market T'
	| 'Market B'
	| 'Menagerie TL'
	| 'Menagerie TR'
	| 'Menagerie BL'
	| 'Menagerie BR'
	| 'Military_Academy L'
	| 'Military_Academy R'
	| 'Military_Academy T'
	| 'Military_Academy B'
	| 'Mill'
	| 'Mint'
	| 'Monastery L'
	| 'Monastery R'
	| 'Monastery T'
	| 'Monastery B'
	| 'Monument'
	| 'Museum L'
	| 'Museum R'
	| 'Museum T'
	| 'Museum B'
	| 'Noble_Villa L'
	| 'Noble_Villa R'
	| 'Noble_Villa T'
	| 'Noble_Villa B'
	| 'Observatory'
	| 'Orphanage'
	| 'Palace TL'
	| 'Palace TR'
	| 'Palace BL'
	| 'Palace BR'
	| 'Park'
	| 'Pier'
	| 'Shop'
	| 'Shrine'
	| 'Smithy'
	| 'Stable'
	| 'Stockyard TL'
	| 'Stockyard TR'
	| 'Stockyard BL'
	| 'Stockyard BR'
	| 'Tannery'
	| 'Tavern'
	| 'Temple L'
	| 'Temple R'
	| 'Temple T'
	| 'Temple B'
	| 'Tenement'
	| 'Theater L'
	| 'Theater R'
	| 'Theater T'
	| 'Theater B'
	| 'Town_Hall L'
	| 'Town_Hall R'
	| 'Town_Hall T'
	| 'Town_Hall B'
	| 'Trade_Shop'
	| 'University TL'
	| 'University TR'
	| 'University BL'
	| 'University BR'
	| 'Watchtower'
	| 'Waterfront_TL_Corner TL'
	| 'Waterfront_TL_Corner TR'
	| 'Waterfront_TL_Corner BL'
	| 'Waterfront_TL_Corner BR'
	| 'Waterfront_TR_Corner TL'
	| 'Waterfront_TR_Corner TR'
	| 'Waterfront_TR_Corner BL'
	| 'Waterfront_TR_Corner BR'
	| 'Waterfront_BL_Corner TL'
	| 'Waterfront_BL_Corner TR'
	| 'Waterfront_BL_Corner BL'
	| 'Waterfront_BL_Corner BR'
	| 'Waterfront_BR_Corner TL'
	| 'Waterfront_BR_Corner TR'
	| 'Waterfront_BR_Corner BL'
	| 'Waterfront_BR_Corner BR'
	| 'Waterfront_Bottom TL'
	| 'Waterfront_Bottom TR'
	| 'Waterfront_Bottom BL'
	| 'Waterfront_Bottom BR'
	| 'Waterfront_Left TL'
	| 'Waterfront_Left TR'
	| 'Waterfront_Left BL'
	| 'Waterfront_Left BR'
	| 'Waterfront_Right TL'
	| 'Waterfront_Right TR'
	| 'Waterfront_Right BL'
	| 'Waterfront_Right BR'
	| 'Waterfront_Top TL'
	| 'Waterfront_Top TR'
	| 'Waterfront_Top BL'
	| 'Waterfront_Top BR'
	| 'Waterway_H'
	| 'Waterway_V'
	| 'Waterway_TL_Corner'
	| 'Waterway_TR_Corner'
	| 'Waterway_BL_Corner'
	| 'Waterway_BR_Corner'
	| 'Waterway_Cross'
	| 'Waterway_Lake_H'
	| 'Waterway_Lake_V'
	| 'Waterway_Lake_L'
	| 'Waterway_Lake_R'
	| 'Waterway_Lake_T'
	| 'Waterway_Lake_B'
	| 'Waterway_Lake_TL_Corner'
	| 'Waterway_Lake_TR_Corner'
	| 'Waterway_Lake_BL_Corner'
	| 'Waterway_Lake_BR_Corner'
	| 'Waterway_Long_H L'
	| 'Waterway_Long_H R'
	| 'Waterway_Long_V T'
	| 'Waterway_Long_V B'
	| 'Waterway_Long_L L'
	| 'Waterway_Long_L R'
	| 'Waterway_Long_R L'
	| 'Waterway_Long_R R'
	| 'Waterway_Long_T T'
	| 'Waterway_Long_T B'
	| 'Waterway_Long_B T'
	| 'Waterway_Long_B B'
	| 'Waterway_Long_TL_Corner L'
	| 'Waterway_Long_TL_Corner R'
	| 'Waterway_Long_TL_Corner T'
	| 'Waterway_Long_TL_Corner B'
	| 'Waterway_Long_TR_Corner L'
	| 'Waterway_Long_TR_Corner R'
	| 'Waterway_Long_TR_Corner T'
	| 'Waterway_Long_TR_Corner B'
	| 'Waterway_Long_BL_Corner L'
	| 'Waterway_Long_BL_Corner R'
	| 'Waterway_Long_BL_Corner T'
	| 'Waterway_Long_BL_Corner B'
	| 'Waterway_Long_BR_Corner L'
	| 'Waterway_Long_BR_Corner R'
	| 'Waterway_Long_BR_Corner T'
	| 'Waterway_Long_BR_Corner B';

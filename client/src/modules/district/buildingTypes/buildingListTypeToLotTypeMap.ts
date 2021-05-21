import { BuildingListType } from './buildingListType';
import { LotType } from './lotType';

export type BuildingListTypeToLotTypeMap = Record<BuildingListType, LotType[]>;

export const buildingListTypeToLotTypeMap: BuildingListTypeToLotTypeMap = {
	'Academy H': ['Academy L', 'Academy R'],
	'Academy V': ['Academy T', 'Academy B'],
	Alchemist: ['Alchemist'],
	Bank: ['Bank'],
	Arena: ['Arena TL', 'Arena TR', 'Arena BL', 'Arena BR'],
	'Bardic College H': ['Bardic_College L', 'Bardic_College R'],
	'Bardic College V': ['Bardic_College T', 'Bardic_College B'],
	Barracks: ['Barracks'],
	'Black Market': ['Black_Market'],
	Brewery: ['Brewery'],
	Bridge: ['Bridge'],
	'Bureau H': ['Bureau L', 'Bureau R'],
	'Bureau V': ['Bureau T', 'Bureau B'],
	"Caster's Tower": ["Caster's_Tower"],
	Castle: ['Castle TL', 'Castle TR', 'Castle BL', 'Castle BR'],
	Cathedral: ['Cathedral TL', 'Cathedral TR', 'Cathedral BL', 'Cathedral BR'],
	Cistern: ['Cistern'],
	'Dance Hall': ['Dance Hall'],
	Dump: ['Dump'],
	'Exotic Artisan': ['Exotic_Artisan'],
	'Foreign Quarter': [
		'Foreign_Quarter TL',
		'Foreign_Quarter TR',
		'Foreign_Quarter BL',
		'Foreign_Quarter BR',
	],
	'Foundry H': ['Foundry L', 'Foundry R'],
	'Foundry V': ['Foundry T', 'Foundry B'],
	'Garrison H': ['Garrison L', 'Garrison R'],
	'Garrison V': ['Garrison T', 'Garrison B'],
	Granary: ['Granary'],
	Graveyard: ['Graveyard'],
	'Guildhall H': ['Guildhall L', 'Guildhall R'],
	'Guildhall V': ['Guildhall T', 'Guildhall B'],
	Herbalist: ['Herbalist'],
	'Hospital H': ['Hospital L', 'Hospital R'],
	'Hospital V': ['Hospital T', 'Hospital B'],
	House: ['House'],
	Inn: ['Inn'],
	Jail: ['Jail'],
	Library: ['Library'],
	'Luxury Store': ['Luxury_Store'],
	'Magic Shop': ['Magic_Shop'],
	'Magical Academy H': ['Magical_Academy L', 'Magical_Academy R'],
	'Magical Academy V': ['Magical_Academy T', 'Magical_Academy B'],
	Mansion: ['Mansion'],
	'Market H': ['Market L', 'Market R'],
	'Market V': ['Market T', 'Market B'],
	Menagerie: ['Menagerie TL', 'Menagerie TR', 'Menagerie BL', 'Menagerie BR'],
	'Military Academy H': ['Military_Academy L', 'Military_Academy R'],
	'Military Academy V': ['Military_Academy T', 'Military_Academy B'],
	Mill: ['Mill'],
	Mint: ['Mint'],
	'Monastery H': ['Monastery L', 'Monastery R'],
	'Monastery V': ['Monastery T', 'Monastery B'],
	Monument: ['Monument'],
	'Museum H': ['Museum L', 'Museum R'],
	'Museum V': ['Museum T', 'Museum B'],
	'Noble Villa H': ['Noble_Villa L', 'Noble_Villa R'],
	'Noble Villa V': ['Noble_Villa T', 'Noble_Villa B'],
	Observatory: ['Observatory'],
	Orphanage: ['Orphanage'],
	Palace: ['Palace TL', 'Palace TR', 'Palace BL', 'Palace BR'],
	Park: ['Park'],
	Pier: ['Pier'],
	Shop: ['Shop'],
	Shrine: ['Shrine'],
	Smithy: ['Smithy'],
	Stable: ['Stable'],
	Stockyard: ['Stockyard TL', 'Stockyard TR', 'Stockyard BL', 'Stockyard BR'],
	Tannery: ['Tannery'],
	Tavern: ['Tavern'],
	'Temple H': ['Temple L', 'Temple R'],
	'Temple V': ['Temple T', 'Temple B'],
	Tenement: ['Tenement'],
	'Theater H': ['Theater L', 'Theater R'],
	'Theater V': ['Theater T', 'Theater B'],
	'Town Hall H': ['Town_Hall L', 'Town_Hall R'],
	'Town Hall V': ['Town_Hall T', 'Town_Hall B'],
	'Trade Shop': ['Trade_Shop'],
	University: [
		'University TL',
		'University TR',
		'University BL',
		'University BR',
	],
	Watchtower: ['Watchtower'],
	Waterfront: [
		'Waterfront TL',
		'Waterfront TR',
		'Waterfront BL',
		'Waterfront BR',
	],
	Waterway: ['Waterway'],
};

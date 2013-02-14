/* 
 * smartcard_list.txt
 * Copyright (C) 2002-2012  Ludovic Rousseau
 * 
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA
 * 02111-1307  USA
 * 
 * This list contains a match between an ATR and a card type
 * The list is sorted for edition purposes
 * 
 * You can get the latest version of this file from:
 * http://ludovic.rousseau.free.fr/softwares/pcsc-tools/smartcard_list.txt
 * 
 * $Id: smartcard_list.txt 6522 2013-02-05 17:33:07Z rousseau $
 * 
 * syntax:
 * ATR in regular expression form
 * \\t descriptive text
 * \\t descriptive text
 * \\t descriptive text
 * empty line
 *
 */

var list = exports.list = {
	'3B 02 14 50' : {
		name:'Schlumberger Multiflex 3k'
	},
	'3B 02 53 01':{
		name:'Gemplus GemClub Memo'
	},
	'3B 04 00 00 00 00':{
		name:'Laundromat payment card'
	},
	'3B 04 07 3C 85 92':{
		name:'OLD Spanish Prepaid phone cards (pesetas) provided by Telefonica'
	},
	'3B 04 07 3C 85 9A':{
		name:'OLD Spanish Prepaid phone cards (pesetas) provided by Telefonica'
	},
	'3B 04 07 3C 89 10':{
		name:'OLD Spanish Prepaid phone cards (pesetas) provided by Telefonica'
	},
	'3B 04 07 3C 89 18':{
		name:'OLD Spanish Prepaid phone cards (pesetas) provided by Telefonica'
	},
	'3B 04 07 3C 89 92':{
		name:'OLD Spanish Prepaid phone cards (pesetas) provided by Telefonica'
	},
	'3B 04 07 3C 89 9A':{
		name:'OLD Spanish Prepaid phone cards (pesetas) provided by Telefonica'
	},
	'3B 04 07 3C 8C 10':{
		name:'OLD Spanish Prepaid phone cards (pesetas) provided by Telefonica'
	},
	'3B 04 09 9C 2B 83':{
		name:'T.P.G. - CART@BONUS 20CHF (Transport)',
		info:'http://www.tpg.ch/fr/titres-de-transport/moyens-de-paiement/carte-prepayee-cartabonus.php'
	},
	'3B 04 17 3C CC E0':{
		name:'prepaid payphone card, issued by Telefónica Comunicaciones Públicas (http://www.cabitel.es)'
	},
	'3B 04 2A FF 32 00':{
		name:'Mac Gray Intelligent Laundry Systems laundry card'
	},
	'3B 04 41 11 77 81':{
		name:'Sample Mifare DESFire contactless smartcard from Phillips'
	},
	'3B 04 41 11 77 B1':{
		name:'IBM JCOP 30 contactless'
	},
	'3B 04 49 32 43 2E':{
		name:'German Health Insurance Card',
		info:'"LogCard" from concept2.com (a indoor rower manufacturer)	\
			I2C card'
	},
	'3B 04 92 23 10 91':{
		name:'Siemens SLE 4432/42 card'
	},
	'3B 04 99 FF FF 90':{
		name:'Madrid prepaid parkimeters parking card'
	},
	'3B 04 9C FF 21 43':{
		name:'Hercules laundry stored value card'
	},
	'3B 04 A2 13 10 91':{
		name:'PM2P Chipkarte SLE 4442, Code FFFFFF',
		info:'Bahn BKK (Deutsche Bahn AG - Insurance Company)	\
			NH Hotels World fidelization card'
	},
	'3B 04 C9 D0 F1 40':{
		name:'Cuban prepaid phone card provided by ETECSA'
	},
	'3B 04 FF FF FF FF':{
		name:'Identity card Universidad del Pais Vasco / Euskal Herriko Unibertsitatea www.ehu.es'
	},
	'3B 05 68 01 01 02 05':{
		name:'Certinomis card (electronic certificates)',
		info:'Schlumberger Cryptoflex ActivCard'
	},
	'3B 05 80 73 F7 01 C0':{
		name:'(Shenzhen, China) Mingwah Aohan eKey, eID',
		info:'http://en.mwcard.com/index.php?option=com_k2&view=item&layout=item&id=79&Itemid=439'
	},
	'3B 06 00 00 04 2E CF 4C':{
		name:'HID 1346 ProxKey III',
		info:'http://www.hidglobal.com/products/cards-and-credentials/hid-proximity/1346'
	},
	'3B 06 00 10 01 D6 C5 46':{
		name:'HID ProxKey II FOB',
		info:'http://www.hidglobal.com/documents/proxkey_ds_en.pdf'
	},
	'3B 06 01 02 10 .. .. ..':{
		name:'ISOProx II Card:',
		info:'http://www.hidglobal.com/documents/isoprox_ds_en.pdf'
	},
	'3B 06 81 24 80 80 90 00':{
		name:'10€ credit card for TV & telephone in Jerez de la',
		info:'Frontera hospital\'s rooms. The maker can be found at www.isernsa.com	\
			(ISERN Medical Telecomunications)'
	},
	'3B 06 A2 13 10 91 90 00':{
		name:'C3P2K SAMPLE CARD (C3PO, S.L)'
	},
	'3B 09 41 04 11 DD 82 2F 00 00 88':{
		name:'1k contactless Mifare'
	},
	'3B 0A 20 62 0C 01 4F 53 45 99 14 AA':{
		name:'GSM-SIM BEN (1800MHz)'
	},
	'3B 0A 21 00 26 07 4F 53 45 98 08 F8':{
		name:'ORGA test systems GSM phase 2+ test SIM.'
	},
	'3B 0E BC E1 CA AF C2 DF BC AD BC D3 C3 DC BF A8':{
		name:'German "Versichertenkarte" Healthcare card'
	},
	'3B 0F 00 65 46 53 05 16 05 71 DF 00 00 00 45 50 53':{
		name:'Feitian ePass3000, Feitian formatted'
	},
	'3B 0F 00 65 46 53 05 16 05 71 DF 00 00 00 80 6A 82':{
		name:'Feitian ePass3000, OpenSC formatted'
	},
	'3B 0F 00 65 46 53 05 30 05 71 DF 00 00 00 80 6A 82':{
		name:'Fetian epass3000'
	},
	'3B 0F 80 22 15 E1 5A 00 20 00 30 21 03 31 21 03 00':{
		name:'RSA SecurID SID800 token'
	},
	'3B 0F 80 6A 16 32 46 49 53 45 53 8C E0 FF 07 90 00':{
		name:'GSM-SIM Sonera (from 1998)'
	},
	'3B 0F FF C1 B5 CC 72 CA 00 00 ..':{
		name:'Mifare Std 1K'
	},
	'3B 15 11 12 CA 07 11 CA':{
		name:'DRE Crypt (Pay TV)'
	},
	'3B 15 11 12 CA 07 14 CF':{
		name:'PlatformaHD (Russia) DRE Crypt 4AE1:14'
	},
	'3B 15 13 80 53 41 52 03':{
		name:'Eutron CryptoIdentity (ATMEL AT903232C - 6464C Cryptographic',
		info:'processors, 64KB EEPROM, RSA 2048)'
	},
	'3B 15 18 2E 00 5C 00 01':{
		name:'China Unicom 64k OTA'
	},
	'3B 15 94 C3 02 08 16 01':{
		name:'GSM-SIM EMT (Estonia)'
	},
	'3B 16 18 AF 01 02 02 02 00':{
		name:'SIM Virgin Mobile (Australia)'
	},
	'3B 16 94 71 01 01 00 27 00':{
		name:'Cingular GSM SIM Card'
	},
	'3B 16 94 71 01 01 05 02 00':{
		name:'GSM SIM Bouygues Telecom'
	},
	'3B 16 94 71 01 01 06 02 00':{
		name:'SFR GSM SIM Card'
	},
	'3B 16 94 81 10 06 01 .. ..':{
		name:'Schlumberger Cyberflex Access 16K'
	},
	'3B 16 94 81 10 06 01 81 2F':{
		name:'Schlumberger Cyberflex Access Augmented Crypto'
	},
	'3B 16 94 81 10 06 01 81 3F':{
		name:'Schlumberger Cyberflex Access Crypto'
	},
	'3B 16 94 D0 01 76 0D 2A 00':{
		name:'Peruvian GSM SIM'
	},
	'3B 16 94 D0 01 7B 2C 0E 00':{
		name:'SIM tunisiana'
	},
	'3B 16 95 D0 00 45 F7 01 00':{
		name:'Telefónica O2 Czech Republic, a.s. - O2 sim card - 173285 / SIM64ND.GO0',
		info:'http://www.o2.cz'
	},
	'3B 16 96 41 73 74 72 69 64':{
		name:'Gemalto .NET v2.0'
	},
	'3B 16 96 D0 00 D4 07 2C 00':{
		name:'Vodafone India Postpaid /  Local Operator 3G'
	},
	'3B 17 11 80 65 AF 03 42 00 D8':{
		name:'TELE2 SPB SIM Russia'
	},
	'3B 17 13 9C 12 02 01 01 07 40':{
		name:'Schlumberger Cyberflex Access Developer 32k'
	},
	'3B 17 94 18 01 01 01 01 41 93':{
		name:'T-Mobile SIM card'
	},
	'3B 17 94 18 01 01 02 01 41 49':{
		name:'white SFR SIM card'
	},
	'3B 17 94 18 02 01 25 01 41 93':{
		name:'AT&T Wireless GSM SIM Card'
	},
	'3B 17 94 20 01 01 0A 02 41 43':{
		name:'KPN SIM card'
	},
	'3B 17 94 20 05 01 10 01 41 FF':{
		name:'CLARO SIM card (ex CTI Movil)'
	},
	'3B 17 94 80 65 D0 01 6C F2 BE':{
		name:'CMCC sim cards with TD-SCDMA support'
	},
	'3B 17 94 80 65 D0 01 8B F2 08':{
		name:'China SIM card'
	},
	'3B 17 94 89 01 02 01 02 41 87':{
		name:'Vodafone/Omnitel 16K GSM SIM'
	},
	'3B 18 94 53 0D 06 77 24 07 FF 02':{
		name:'GSM SIM Tele2 Estonia, prepaid (Telecommunication)'
	},
	'3B 19 14 55 90 01 01 01 00 05 08 B0':{
		name:'Schlumberger Multiflex 8k'
	},
	'3B 19 14 55 90 01 02 01 00 05 04 B0':{
		name:'Schlumberger Multiflex 4k'
	},
	'3B 19 14 59 01 01 0F 01 00 05 08 B0':{
		name:'Schlumberger Multiflex 8k'
	},
	'3B 19 94 31 02 05 10 45 98 01 02 4E':{
		name:'GSM-SIM EMT (Estonia)'
	},
	'3B 1B 94 80 69 07 05 21 11 00 80 00 00 00':{
		name:'Aircel SIM (Telecommunication)'
	},
	'3B 1B 96 05 43 43 32 52 53 05 12 10 90 00':{
		name:'ChipCity CC32RS512 factory boot loader',
		info:'(this is a flash based CPU card with a factory-default bootloader)'
	},
	'3B 1C 94 43 48 49 50 44 52 49 56 45 30 30 31':{
		name:'SCM Chipdrive MyKey MasterKey 24k'
	},
	'3B 1F 11 00 67 42 41 46 49 53 45 53 52 66 FF 81 90 00':{
		name:'Finnish student id card'
	},
	'3B 1F 11 00 67 80 42 46 49 53 45 10 52 66 FF 81 90 00':{
		name:'Nokia branded SC (Setec)'
	},
	'3B 1F 11 00 6A 01 38 46 49 53 45 10 8C 02 FF 07 90 00':{
		name:'GSM-SIM Saunalahti (from 2004)',
		info:'Finnish cell phone operator "Sonera" SIM card (from 2002)'
	},
	'3B 1F 11 00 6A 31 36 46 49 53 45 13 8C 02 FF 07 90 00':{
		name:'GSM-SIM card - Telenor Mobil - http://www.telenor.com/'
	},
	'3B 1F 11 00 6A 31 38 46 49 53 45 13 8C 02 FF 07 90 00':{
		name:'Latvian GSM operator TELE2 (SIM)'
	},
	'3B 1F 11 80 6A 16 32 46 49 53 45 15 8C E6 FF 07 90 00':{
		name:'GSM SIM card - Tele2 Estonia - http://www.tele2.ee'
	},
	'3B 1F 11 80 6A 32 37 46 49 53 45 12 8C 00 FF 07 90 00':{
		name:'Setec Test card, SetCOS 3.7.2, rel 1.3'
	},
	'3B 1F 11 80 6A 32 37 46 49 53 45 12 8C 02 FF 07 90 00':{
		name:'GSM-SIM DNA Finland (from 2001)'
	},
	'3B 1F 11 80 6A 80 34 46 49 53 45 53 94 00 FF 07 .. ..':{
		name:'Setec SetCos 3.4'
	},
	'3B 1F 11 80 6A 80 34 46 49 53 45 53 94 36 FF 07 90 00':{
		name:'SetCOS 3.4.0c',
		info:'RSA SecurID 3100'
	},
	'3B 1F 94 00 6A 01 38 46 49 53 45 10 8C 02 FF 07 90 00':{
		name:'GSM-SIM Saunalahti (from 2004)'
	},
	'3B 1F 94 80 31 00 73 12 21 13 57 4A 33 05 30 32 34 00':{
		name:'Tron - MVNO Malaysia SIM Card (Giesecke & Devrient SIM)',
		info:'http://www.tron.my'
	},
	'3B 1F 94 80 6A 16 32 46 49 53 45 15 8C E6 FF 07 90 00':{
		name:'GSM-SIM Sonera (from 2002)'
	},
	'3B 1F 95 80 31 00 73 12 21 13 57 4A 33 0E 19 32 33 00':{
		name:'Latvian GSM Operator BITE'
	},
	'3B 23 00 00 36 41 81':{
		name:'Schlumberger Payflex 4k SAM'
	},
	'3B 23 00 35 11 80':{
		name:'Schlumberger Payflex 1k User'
	},
	'3B 23 00 35 11 81':{
		name:'Schlumberger Payflex 1k SAM'
	},
	'3B 23 00 35 13 80':{
		name:'Schlumberger Cyberflex Access Campus'
	},
	'3B 23 00 35 13 FF':{
		name:'Schlumberger MicroPayflex'
	},
	'3B 23 00 35 41 80':{
		name:'PayflexHID (idenfitied by Sun Ray Services)'
	},
	'3B 24 00 .. .. .. 45':{
		name:'Conax'
	},
	'3B 24 00 30 42 30 30':{
		name:'ComHem Digital-TV smartcard (Sweden)',
		info:'TNK Telewizja Na Kartę (Poland) - Conditional access system : Conax (Norway)	\
			http://telewizjanakarte.pl/'
	},
	'3B 24 00 80 72 94 43':{
		name:'MPCOS-3DES 64K \\ EMV Filter (Gemplus)'
	},
	'3B 26 00 00 26 40 00 90 00':{
		name:'Schlumberger, purse?'
	},
	'3B 26 00 11 01 6D 03':{
		name:'OLD CajaMadrid Visa Cash, ID card for Universidad Autónoma de Madrid, Madrid (about 1998)'
	},
	'3B 26 00 11 04 5C 03 90 00':{
		name:'Caixa Abierta (Barcelona, Spain) Cash/Visa Electron'
	},
	'3B 26 00 11 06 23 03 90 00':{
		name:'Tarjeta de la Seguridad Social (Spanish Social Insurance Card)'
	},
	'3B 26 00 31 08 6C 03 90 00':{
		name:'VISA ELECTRON from Caixa Catalunya bank card (www.caixacatalunya.es) for students in UPC university of Barcelona (Spain) (www.upc.es)'
	},
	'3B 26 00 31 1A 45 03 90 00':{
		name:'Tajeta Sanitaria Individual (Spanish Insurance Card)',
		info:'from the "Junta de Andalucia(Consejeria de Salud)"'
	},
	'3B 27 00 80 65 A2 .. 01 01 37':{
		name:'Gemplus GemSAFE Smart Card (4K)'
	},
	'3B 27 00 80 65 A2 00 01 01 37':{
		name:'Gemplus GemSAFE Card CSP v1.0'
	},
	'3B 27 00 80 65 A2 02 02 82 37':{
		name:'Gemplus GPK2000s'
	},
	'3B 27 00 80 65 A2 02 03 82 37':{
		name:'Gemplus GPK2000sp'
	},
	'3B 27 00 80 65 A2 04 01 01 37':{
		name:'Gemplus GPK4000s'
	},
	'3B 27 00 80 65 A2 05 01 01 37':{
		name:'Gemplus GPK4000sp'
	},
	'3B 27 00 80 65 A2 06 01 01 37':{
		name:'GPK 4000, RSA 512 bits Sign, Unwrap 40 bits'
	},
	'3B 27 00 80 65 A2 0C 01 01 37':{
		name:'Gemplus GPK4000'
	},
	'3B 27 00 80 65 A2 8C 3B 27 00':{
		name:'GPK 4000, RSA 1024 bits Sign, Unwrap 256 bits'
	},
	'3B 29 00 24 93 01 00 00 00 00 01 A9':{
		name:'Telephone chipcard for the Vienna University of Technology',
		info:'http://nic.tuwien.ac.at/telefonie/chipkarte/'
	},
	'3B 29 00 80 72 A4 45 64 00 00 D0 15':{
		name:'Moeda Electronica Bradesco (Gemplus MPCOS?) (Brasilia)'
	},
	'3B 29 00 80 72 A4 45 64 00 FF 00 10':{
		name:'MPCOS-3DES 8K (Gemplus)',
		info:'MBNA Europe Platinum Plus Mastercard	\
			MasterCard Card - Worldcard - Yapıkredi / Turkey	\
			Portugal BPI Visa Electron	\
			UCFIN (Italy) "UniCreditCard Free" or "Plus" (VISA or MasterCard) credit card'
	},
	'3B 2A 00 80 65 A0 58 04 01 62 72 D6 43':{
		name:'Gemplus GemCombiXplore MPCOS Pro'
	},
	'3B 2A 00 80 65 A2 01 .. .. .. 72 D6 41':{
		name:'Gemplus MPCOS EMV 1 Byte sectors'
	},
	'3B 2A 00 80 65 A2 01 .. .. .. 72 D6 43':{
		name:'Gemplus MPCOS EMV 4 Byte sectors'
	},
	'3B 2A 00 80 65 A2 01 00 00 00 72 D6 41':{
		name:'MPCOS_EMV_1B'
	},
	'3B 2A 00 80 65 A2 01 00 00 00 72 D6 43':{
		name:'MPCOS_EMV_4B'
	},
	'3B 2A 00 80 65 A2 01 01 01 3C 72 D6 43':{
		name:'Estonian bank "SEB" (VISA Electron)'
	},
	'3B 2A 00 80 65 A2 01 01 01 3D 72 D6 43':{
		name:'GEMPLUS Logico Secure SmartCard for Citrix Metaframe',
		info:'PTTPost Easy Stamp'
	},
	'3B 2A 00 80 65 A2 01 02 01 31 72 D6 43':{
		name:'MPCOS-EMV 64K Functional Sample'
	},
	'3B 2F 00 80 69 10 80 00 01 A1 0A 01 01 59 83 0E 90 00':{
		name:'Belgium Dexia (Axion) Bank Card',
		info:'Proton/Bancontact Mister Cash/Maestro'
	},
	'3B 2F 00 80 69 AF 03 07 06 68 00 00 0A 0E 83 06':{
		name:'GSM SIM MobilCom (Gemplus)'
	},
	'3B 2F 00 80 69 AF 03 07 06 68 00 00 0A 0E 83 06 9F 16':{
		name:'MobilCom-Karte'
	},
	'3B 2F 00 80 69 AF 03 07 06 68 00 05 0A 0E 83 3E 9F 16':{
		name:'KPN @ Mobile SIM card'
	},
	'3B 32 15 00 06 80':{
		name:'Schlumberger Multiflex 8k'
	},
	'3B 32 15 00 06 95':{
		name:'Schlumberger Multiflex 8k DES'
	},
	'3B 34 00 00 30 42 30 30':{
		name:'Conax card: T-Home Hungary'
	},
	'3B 34 94 00 30 42 30 30':{
		name:'Conax card: ComHem sweden'
	},
	'3B 37 11 00 46 4C 4F 4D 41 90 00':{
		name:'SLE 4428'
	},
	'3B 37 13 00 80 62 11 04 82 90 00':{
		name:'Swiss UBS Maestro/CASH Bank Card'
	},
	'3B 37 13 00 80 62 21 13 82 90 00':{
		name:'Swiss UBS Maestro/CASH Bank Card'
	},
	'3B 3B .. 00 80 6. A[F,E] 03 0[C,D] .. .. 83 .. 90 00':{
		name:'GemXplore Xpresso V3'
	},
	'3B 3B 11 00 67 AF 10 30 07 00 C0 33 33 90 00':{
		name:'Mobicarte Orange'
	},
	'3B 3B 11 00 80 65 AF 03 0C 01 6F 83 0F 90 00':{
		name:'Gemplus GemX{plore,presso} V3-B1'
	},
	'3B 3B 11 00 80 69 AF 03 0C 01 6F 83 0[0,1] 90 00':{
		name:'GemXplore\'Xpresso V3 64K'
	},
	'3B 3B 11 00 91 41 10 10 10 5B A0 00 33 90 00':{
		name:'Pannon SIM card (Hungary)'
	},
	'3B 3B 94 00 00 64 05 3E 03 0F 31 80 0E 90 00':{
		name:'Slovenian national health insurance card'
	},
	'3B 3B 94 00 4F 34 10 20 01 0. .0 33 33 90 00':{
		name:'Wind (Italy) GSM SIM card'
	},
	'3B 3B 94 00 67 37 10 00 00 39 60 33 33 90 00':{
		name:'Avea GSM / Turkey'
	},
	'3B 3B 94 00 69 3C 10 30 01 3E 40 33 00 90 00':{
		name:'UK Vodafone GSM SIM'
	},
	'3B 3B 94 00 6A 38 20 00 00 09 E0 33 33 90 00':{
		name:'virgin mobile (french) SIM card'
	},
	'3B 3B 94 00 80 65 32 13 04 03 30 83 81 90 00':{
		name:'SIM cards by the austrian cell phone provider A1'
	},
	'3B 3B 94 00 80 65 AF 03 0D 01 74 83 0F 90 00':{
		name:'Gemplus GemXplore Xpresso V3 B1P',
		info:'Mobistar SIM - Belgium (Gemplus)'
	},
	'3B 3B 94 00 9B 44 20 10 4D 04 20 00 33 90 00':{
		name:'SIM card for 063 network of Telekom Srbije, the Serbian state-owned telephone company.'
	},
	'3B 3B 94 00 9B 44 20 10 4D 05 00 00 33 90 00':{
		name:'SIM card for 066 network Telekom Srbije, the Serbian state-owned telephone company.'
	},
	'3B 3B 94 00 A6 39 90 00 00 00 21 83 83 90 00':{
		name:'meteor ireland http://www.meteor.ie'
	},
	'3B 3B 96 00 40 22 51 00 00 42 00 33 33 90 00':{
		name:'Wind (Italy) 128K GSM SIM card'
	},
	'3B 3B 96 00 40 54 01 00 00 0A C0 33 33 90 00':{
		name:'Wind (Italy) 64K prepaid GSM SIM card'
	},
	'3B 3C 11 00 40 AF 13 F3 12 00 06 87 83 80 90 00':{
		name:'SIM GSM Orange Fr'
	},
	'3B 3C 11 00 42 AF 20 A3 20 07 00 22 83 82 90 00':{
		name:'Orange Mobicarte (SIM card old generation)'
	},
	'3B 3C 94 00 42 31 11 A2 12 02 09 51 83 80 90 00':{
		name:'Omnitel IT 16K GSM SIM card'
	},
	'3B 3C 94 00 4B 31 25 A2 10 13 14 47 83 83 90 00':{
		name:'GSM SFR'
	},
	'3B 3C 94 00 4C 31 25 A7 20 1B 00 15 83 83 90 00':{
		name:'GSM-SIM (900MHz) card of the carrier vodafone for their cellular',
		info:'network (phase 2+ with 3V)'
	},
	'3B 3C 94 00 63 31 12 F0 00 00 46 40 83 83 90 00':{
		name:'Old russian "beeline" sim'
	},
	'3B 3D 94 00 01 0F 00 36 00 00 86 60 18 04 00 01 07':{
		name:'Vodafone GSM / Turkey'
	},
	'3B 3D 94 00 23 18 02 56 00 00 86 60 5B 1B 00 00 0F':{
		name:'GSM SIM, TMN (Moche prepaid, Portugal)'
	},
	'3B 3D 94 00 24 0E 00 96 00 00 86 60 31 B5 00 06 07':{
		name:'GSM SIM Tele2 Estonia; 2008'
	},
	'3B 3D 94 00 44 4D 54 11 00 06 06 17 62 11 00 30 00':{
		name:'China Unicom SIM card'
	},
	'3B 3E 94 00 80 31 00 73 FE 21 13 62 00 31 83 81 90 00':{
		name:'Vodafone (Italy) 64kB GSM SIM card'
	},
	'3B 3F 11 00 6F AF 65 03 12 01 80 73 32 21 1B 83 0F 90 00':{
		name:'GSM SIM card Orange J2RE postpaid'
	},
	'3B 3F 11 00 80 12 00 91 31 C0 64 0E 01 13 12 72 F7 41 05':{
		name:'SCOSTA (transport)'
	},
	'3B 3F 11 00 80 69 AF 03 37 00 12 00 00 00 0E 83 18 9F 16':{
		name:'Reliance SIM (Prepaid), Telecommunication'
	},
	'3B 3F 94 00 80 65 AF 03 12 01 6F 73 32 21 1B 83 0F 90 00':{
		name:'GSM SIM Card (GEMPLUS), issued by Orange Switzerland (Prepaid)',
		info:'Italian Vodafone 64k SIM	\
			GSM SIM T-Mobile NL'
	},
	'3B 3F 94 00 80 65 AF 03 12 01 79 73 32 21 00 83 0F 90 00':{
		name:'O2 (UK) SIM'
	},
	'3B 3F 94 00 80 65 AF 03 12 01 79 73 32 21 1B 83 0F 90 00':{
		name:'UK O2 GSM SIM (2G Online Prepay Maldives)',
		info:'Tesco Mobile (UK) SIM'
	},
	'3B 3F 94 00 80 69 AF 03 07 06 67 00 00 0A 0E 83 3E 9F 16':{
		name:'SFR SIM card (red Gemplus Répertoire)'
	},
	'3B 3F 94 00 80 69 AF 03 07 06 67 09 97 0A 0E 83 3E 9F 16':{
		name:'BASE SIM - Belgium (Gemplus)'
	},
	'3B 3F 94 00 80 69 AF 03 07 06 68 00 85 0A 0E 83 3E 9F 16':{
		name:'O2 (UK) SIM'
	},
	'3B 3F 94 00 80 69 AF 03 0F 02 80 FF FF 06 0E 83 3E 9F 16':{
		name:'GSM-SIM Telefonica Movistar, prepaid (Spain)'
	},
	'3B 3F 94 00 80 69 AF 03 0F 07 A4 00 00 06 0E 83 3E 9F 16':{
		name:'SIM Card PRO from the austrian telecom "A1"'
	},
	'3B 3F 95 00 80 65 AF 03 12 01 6F 73 32 21 1B 83 00 90 00':{
		name:'Gemplus GemXpresso PRO 64 PK SIM'
	},
	'3B 3F 95 00 80 65 AF 03 12 01 6F 73 32 21 1B 83 0F 90 00':{
		name:'Vodafone Italia SIM 64K'
	},
	'3B 3F 95 00 80 65 AF 03 12 01 79 73 32 21 00 83 0F 90 00':{
		name:'GSM SIM Orange NL'
	},
	'3B 3F 95 00 80 65 AF 03 14 01 8A 73 32 21 1B 83 0F 90 00':{
		name:'SIM Vodafone 64k'
	},
	'3B 3F 95 00 80 69 AF 03 0F 02 80 FF FF 06 0E 83 3E 9F 16':{
		name:'AT&T Wireless GSM SIM Card',
		info:'UK Virgin Mobile GSM SIM'
	},
	'3B 3F 95 00 80 69 AF 03 0F 06 A3 FF FF 06 0E 83 3E 9F 16':{
		name:'"SIMYO" SIM card (KPN)'
	},
	'3B 57 18 02 93 02 01 01 01 90 00':{
		name:'Easyflex FastOS 2.0 / Schlumberger'
	},
	'3B 5B 96 00 00 31 C0 64 C6 FC 10 00 01 90 00':{
		name:'Banking card (Oberthur C.S. 06 18710-04-10)'
	},
	'3B 5E 11 FF 45 73 74 45 49 44 20 76 65 72 20 31 2E 30':{
		name:'Estonian Identity Card (EstEID v1.0 2006 warm)'
	},
	'3B 5F 95 00 80 73 00 01 00 59 43 4C 5A 1B 00 11 40 90 00':{
		name:'SCM Chipdrive MyKey SC'
	},
	'3B 5F 95 00 80 73 00 01 00 59 43 4C 5A 1C 00 11 40 90 00':{
		name:'"CardLogic" CLXSU256KF5'
	},
	'3B 63 00 00 36 41 80':{
		name:'Schlumberger Payflex 4k User'
	},
	'3B 64 .. FF 80 62 .. A2':{
		name:'JCOP20'
	},
	'3B 64 00 00 80 62 0. 51':{
		name:'Setec SetCOS 5.1.0 EMV'
	},
	'3B 64 00 FF 80 62 02 A2':{
		name:'VISA credit card (Nordea bank)'
	},
	'3B 65 00 00 20 63 CB 63 00':{
		name:'Bank card from Societe Générale (Oberthur)'
	},
	'3B 65 00 00 20 63 CB 64 80':{
		name:'MasterCard from La Banque Postale'
	},
	'3B 65 00 00 20 63 CB 66 00':{
		name:'Boursorama banque VISA (bank)'
	},
	'3B 65 00 00 20 63 CB 66 80':{
		name:'Crédit Agricole (french bank) MasterCard'
	},
	'3B 65 00 00 20 63 CB 68 00':{
		name:'VISA credit card (Skandiabanken)',
		info:'VISA credit card (Banque Populaire)	\
			Banque Postale card (bank)	\
			Société Générale (visa / jazz)'
	},
	'3B 65 00 00 20 63 CB 68 00 26':{
		name:'VISA Société Générale - Oberthur CS'
	},
	'3B 65 00 00 20 63 CB 68 80':{
		name:'Capital One MasterCard Platinum'
	},
	'3B 65 00 00 20 63 CB 6A 00':{
		name:'CB Visa La Banque Postale (Gemalto)',
		info:'CB Visa BNP Paribas (France)'
	},
	'3B 65 00 00 20 63 CB 6A 80':{
		name:'Mastercard EMV Debit Card',
		info:'Crédit Agricole (french bank) Gold Mastercard'
	},
	'3B 65 00 00 20 63 CB A0 80':{
		name:'Carrefour, MasterCard credit card, Pass Banque, Oberthur'
	},
	'3B 65 00 00 20 63 CB A1 80':{
		name:'bpaid: bpost prepaid Mastercard',
		info:'http://www.bpost.be/site/fr/residential/finance/bpaid/index.html'
	},
	'3B 65 00 00 20 63 CB A3 A0':{
		name:'VISA card from Banque Populaire'
	},
	'3B 65 00 00 20 63 CB AB 80':{
		name:'Portugal Caixa Geral de Depósitos Mastercard "Caixa Classic"'
	},
	'3B 65 00 00 29 05 01 02 01':{
		name:'ActivCard (Schlumberger) CyberFlex 64K V1 SM 2.1'
	},
	'3B 65 00 00 41 56 49 4F 4E':{
		name:'RBC (Royal Bank of Canada) Avion Visa'
	},
	'3B 65 00 00 43 04 6C 90 00':{
		name:'Carte Bancaire (French banking card) (hot reset)'
	},
	'3B 65 00 00 58 01 01 00 80':{
		name:'RBS Advanta Platinum Reserve Master Card',
		info:'UK Lloyds TSB Visa Debit (issued 2003, Gemplus)'
	},
	'3B 65 00 00 9C 02 02 07 02':{
		name:'US Department of Defense, TEST Common Access Card (CAC)',
		info:'Schlumberger Cyberflex Access #2	\
			Axalto Cyberflex Access 32K V2	\
			Sun Microsystems employee card'
	},
	'3B 65 00 00 9C 1[0,1] 01 01 03':{
		name:'Schlumberger Cyberflex Palmera'
	},
	'3B 66 00 00 00 9C 11 01 01 03':{
		name:'Axalto Cyberflex Access 32K V4 SM 1.3'
	},
	'3B 66 00 00 00 9C 11 01 03 01':{
		name:'Axalto Cyberflex Access 64K V1 Bio SM 3.1'
	},
	'3B 66 00 00 05 12 01 01 01 B1':{
		name:'Lyon1 student card (Moneo compatible)'
	},
	'3B 66 00 00 31 4B 01 01 00 80':{
		name:'VISA credit card (Skandiabanken)'
	},
	'3B 66 00 00 32 D0 00 30 02 01':{
		name:'Kazakhstan Kazkom Onlinebank (Homebank) PKI client key-card',
		info:'(https://www.homebank.kz/)'
	},
	'3B 66 00 00 66 44 01 01 03 B1':{
		name:'Carte etudiant Paris 1 moneo BNP Paribas france (Oberthur)',
		info:'Carte Monéo Caise d\'épargne Crouse de Lyon'
	},
	'3B 66 00 00 90 D1 02 01 10 B1':{
		name:'Moneo card (e-purse)'
	},
	'3B 66 00 00 90 D1 02 01 10 B1 3B 02 14 50':{
		name:'Card "Bordeaux Ma Ville" (yellow)',
		info:'http://www.bordeaux.fr/ebx/portals/ebx.portal?_nfpb=true&_pageLabel=pgPresStand8&classofcontent=presentationStandard&id=57733'
	},
	'3B 66 00 00 90 D1 02 01 20 B1':{
		name:'Moneo card (e-purse)'
	},
	'3B 66 00 00 90 D1 02 01 40 B1':{
		name:'Student card from Paris Diderot University (with Moneo)'
	},
	'3B 66 00 00 90 D1 02 01 52 B1':{
		name:'Pass Campus Alsace, a mix of a student card, a transport card (Badgeo) and a Moneo',
		info:'http://www.passcampus-alsace.fr/	\
			http://www.cts-strasbourg.fr/Tarifs/Carte%C3%A0puceBadgeo/tabid/598/language/fr-FR/Default.aspx'
	},
	'3B 66 00 00 D0 00 47 44 00 80':{
		name:'VISA credit card (RBC Royal Bank)'
	},
	'3B 66 00 FF 4A 43 4F 50 30 33':{
		name:'IBM JCOP 30'
	},
	'3B 66 00 FF 4A 43 4F 50 32 31':{
		name:'JCOP 21'
	},
	'3B 66 00 FF 4A 43 4F 50 33 30':{
		name:'JCOP30 "OP-DI 16k VISA v2 (JCOP30) ORGA"'
	},
	'3B 67 00 00 00 00 00 00 00 90 00':{
		name:'Axa Bank (Belgium) Mastercard Gold / Axa Bank Belgium',
		info:'MisterCash & Proton card	\
			VISA Card (emitted by Bank Card Company - Belgium)'
	},
	'3B 67 00 00 00 00 20 00 00 90 00':{
		name:'BankID card from Sparebank1'
	},
	'3B 67 00 00 00 31 80 71 86 90 00':{
		name:'Swiss ZKB-Bancomat-Card'
	},
	'3B 67 00 00 29 20 00 6F 78 90 00':{
		name:'ING (previously Postbank Chippas) (chipknip) Netherlands',
		info:'Rabobank bankcard (dutch)	\
			ASN Bank debit card	\
			SNS Bank debit card'
	},
	'3B 67 00 00 29 20 00 6F 78 9A 00':{
		name:'ABN AMRO wereldpas'
	},
	'3B 67 00 00 2A 20 00 41 78 90 00':{
		name:'Prepaid Chipknip Netherlands'
	},
	'3B 67 00 00 2D 20 16 01 78 90 00':{
		name:'CNAMTS and CPAM SSO card (French Health Insurance)'
	},
	'3B 67 00 00 2D 20 36 00 78 90 00':{
		name:'Swedish cashcard, http://www.ida.liu.se/~TDDB31/Cashcard.pdf',
		info:'Bank Card (ING - Belgium)	\
			Schiphol Group Privium biometric card (Amsterdam Airport entry system)'
	},
	'3B 67 00 00 73 20 00 6C .. 90 00':{
		name:'Malaysia Citizen Identity Card (MyKad)',
		info:'http://www.jpn.gov.my/en/identitycard'
	},
	'3B 67 00 00 7C 20 40 34 2B 90 00':{
		name:'Swedbank Visa card'
	},
	'3B 67 00 00 7D 20 40 34 3B 90 00':{
		name:'Nordea Visa Sweden'
	},
	'3B 67 00 00 80 62 21 13 82 90 00':{
		name:'UBS MAESTRO CARD (Bank)'
	},
	'3B 67 00 00 85 20 36 30 78 90 00':{
		name:'Belgium Fortis Bank',
		info:'Belgium Keytrade Bank	\
			Belgium Post Bank'
	},
	'3B 67 00 00 85 22 16 31 78 90 00':{
		name:'Swiss UBS Ebanking Chipcard'
	},
	'3B 67 00 00 85 22 16 31 78 9F 00':{
		name:'UBS Token Card (bank)'
	},
	'3B 67 00 00 9C 10 01 01 03 FF 07':{
		name:'Schlumberger Cyberflex Palmera Protect'
	},
	'3B 67 00 00 A5 20 40 10 1F 90 00':{
		name:'Swedish eLegitimation (eID) from Nordea Bank http://www.elegitimation.se/'
	},
	'3B 67 00 00 A6 40 40 00 09 90 00':{
		name:'Visa card issued by Norway bank DNBNor'
	},
	'3B 67 00 00 A8 10 42 20 1F 90 00':{
		name:'MyKad- Identification Card for Malaysians',
		info:'http://en.wikipedia.org/wiki/MyKad'
	},
	'3B 67 00 00 AB 40 40 26 09 90 00':{
		name:'Swedish VISA credit card (Volvofinans)'
	},
	'3B 67 00 00 AB 40 40 27 0B 90 00':{
		name:'Sparebanken Vest, Norway (spv.no). Visa credit card and national',
		info:'debit card [BankAxept] + Gemalto Todos authentication'
	},
	'3B 67 00 00 B3 40 40 00 3B 90 00':{
		name:'Handelsbanken BankID card (Swedish bank authentication issued 2011)'
	},
	'3B 67 00 00 B4 40 40 25 0B 90 00':{
		name:'Electronic meal check'
	},
	'3B 67 00 00 C1 30 40 01 0B 90 00':{
		name:'MC/Maestro card issued by Czech\'s "Ceskoslovenska obchodni banka"'
	},
	'3B 67 00 00 C4 30 40 01 0B 90 00':{
		name:'MasterCard issued by Czech\'s "Ceskoslovenska obchodni banka"',
		info:'Swedish Maestro bank card (Handelsbanken)'
	},
	'3B 67 00 FF C5 00 00 FF FF FF FF 5D':{
		name:'Alice Tv italia (Pay TV)'
	},
	'3B 67 25 00 29 20 00 6F 78 90 00':{
		name:'Albert Heijn klantenkaart (loyalty card)',
		info:'Rabopas (Rabobank)'
	},
	'3B 67 25 00 2A 20 00 4[0,5] 68 90 00':{
		name:'Swedish cashcard (proton)'
	},
	'3B 67 25 00 62 24 33 03 ..':{
		name:'Bull TB1000 ? (SAM for ATM in Luxemburg)'
	},
	'3B 68 00 00 00 73 C8 40 00 00 90 00':{
		name:'Barclaycard Visa Wave & Pay - Chip I/F'
	},
	'3B 68 00 00 00 73 C8 40 10 00 90 00':{
		name:'Icelandic Banking scheme Issued by the Ministry of Treasure in Iceland',
		info:'http://www.islandsrot.is/'
	},
	'3B 68 00 00 00 73 C8 40 11 00 90 00':{
		name:'Woolworths Everyday Money prepaid Mastercard',
		info:'Nordea Bank Norway Visa + national debet card [BankAxept]'
	},
	'3B 68 00 00 00 73 C8 40 12 00 90 00':{
		name:'Brazilian "e-CPF" card'
	},
	'3B 68 00 00 00 73 C8 40 13 00 90 00':{
		name:'MASTERCARD issued by MLP (Marschollek, Lautenschläger and Partner)'
	},
	'3B 68 00 00 01 02 10 96 00 00 90 00':{
		name:'Italian BancoPostaClick Postamat Card (Poste Italiane) -',
		info:'MasterCard debit card	\
			mbna PLATINUM MasterCard	\
			Flash (Banca Fideuram) Italy prepaid Mastercard'
	},
	'3B 68 00 00 56 53 44 43 4C 43 31 30':{
		name:'VISA (Estonian), made by www.trueb.ch',
		info:'Latvian bank "Latvijas Krajbanka" (VISA Electron)'
	},
	'3B 68 00 00 80 62 00 3C 83 00 90 00':{
		name:'Italian PostePay prepaid VISA-Electron',
		info:'PagoBancomat (Debtcard) Maestro - Intesa Sanpaolo Bank / Italy'
	},
	'3B 68 00 00 80 62 00 45 83 00 90 00':{
		name:'MasterCard - Intesa Sanpaolo Bank / Italy'
	},
	'3B 68 00 00 80 66 45 46 01 38 18 03':{
		name:'FNMT WG108k'
	},
	'3B 68 00 00 80 66 57 59 01 00 08 03':{
		name:'Spanish ULPGC student id card (http://www.ulpgc.es/)',
		info:'E-Money capability	\
			Alliance With La Caja de Canarias Bank	\
			Manufactured by GyD IBÉRICA (http://www.gi-de.com)'
	},
	'3B 68 00 00 80 66 A2 06 01 01 64 00':{
		name:'Visa card issued by Czech\'s "Komercni banka" (Gemplus brand on chip)'
	},
	'3B 68 00 00 80 66 A2 06 02 01 32 0E':{
		name:'Gemplus GemClub 1K'
	},
	'3B 68 00 00 9D 03 02 01 01 56 49 53':{
		name:'Visa Card - SberBank / Russia'
	},
	'3B 68 00 00 9D 08 01 02 01 56 49 53':{
		name:'Visa Card - bonus - DenizBank / Turkey'
	},
	'3B 68 00 00 9D 08 01 03 01 4F 54 53':{
		name:'MasterCard Card - bonus - Garanti Bank / Turkey'
	},
	'3B 68 00 00 9D 08 01 03 01 56 49 53':{
		name:'MasterCard Card - bonus - Garanti Bank / Turkey',
		info:'MasterCard Card - bonus plus (paypass) - Garanti Bank / Turkey'
	},
	'3B 68 00 00 9D 08 01 05 01 56 49 53':{
		name:'MasterCard Card - CartaSi (Italian Credit Card)'
	},
	'3B 68 00 00 A1 02 02 01 01 56 49 53':{
		name:'UK NatWest Business MasterCard',
		info:'UK Barclaycard VISA	\
			UK NatWest Platinum MasterCard	\
			Visa Card - DenizBank / Turkey'
	},
	'3B 68 00 00 FF 29 23 00 07 68 90 00':{
		name:'Politecnico di Milano student card',
		info:'"Le Chiavi della Città" SienaCard MINIpay Card'
	},
	'3B 68 00 FF 00 73 C8 40 00 00 90 00':{
		name:'Visa credit card for Bank of Taiwan'
	},
	'3B 68 00 FF 56 43 41 52 44 6E 73 73':{
		name:'NSSVirtual Smart Card for qemu'
	},
	'3B 69 00 00 24 94 01 00 00 00 00 01 A9':{
		name:'Kazakhstan Helios gas station debit card (http://helios.kz/)'
	},
	'3B 69 00 00 24 94 01 02 01 00 01 01 A9':{
		name:'Chipcard from SUN to be used in SunRay\'s',
		info:'370-4328-01 (31091)'
	},
	'3B 69 00 00 24 94 01 03 01 00 01 00 A9':{
		name:'Schlumberger MicroPayflex S card'
	},
	'3B 69 00 00 4A 43 4F 50 33 31 56 32 32':{
		name:'Visa Europe Sample Card / Axalto'
	},
	'3B 69 00 00 50 01 01 04 01 00 01 01 A9':{
		name:'Sample card given to all attendees of the CTST 2004 SmartCard Conference'
	},
	'3B 69 00 00 55 4B 54 20 56 31 2E 30 00':{
		name:'PostFinance Card Direct (Swiss Post)'
	},
	'3B 69 00 00 56 49 53 5F 49 4E 46 20 06':{
		name:'VISA credit card (Ceska Sporitelna)',
		info:'Maestro credit card (Ceska Sporitelna)'
	},
	'3B 69 00 00 80 31 E0 55 42 45 52 47 53':{
		name:'Banrisul Bank'
	},
	'3B 69 00 00 AC 04 00 00 04 B1 8C 61 21':{
		name:'Student card for Université numérique Paris Île-de-France',
		info:'http://unpidf.univ-paris1.fr/la-carte-multiservice-etudiant-de-paris-et-d-ile-de-france-1775.kjsp?RH=unr-carte&RF=unr-carte'
	},
	'3B 69 00 FF 00 64 4A 10 04 32 05 90 00':{
		name:'NXP JCOP 20 V2.1 16K'
	},
	'3B 69 00 FF 4A 43 4F 50 33 31 56 32 32':{
		name:'JCOP 31 v22 72K - S/C I/F'
	},
	'3B 69 00 FF 53 6D 40 72 74 43 61 66 65':{
		name:'G&D (Giesecke&Devrient) Sm@rtCafé'
	},
	'3B 6A 00 00 80 31 C0 A1 02 03 01 32 81 16':{
		name:'Lloyds TSB Visa Credit/Debit Card'
	},
	'3B 6A 00 00 80 65 A2 01 01 01 3D 72 D6 43':{
		name:'GemSafe Xpresso 16k'
	},
	'3B 6A 00 00 80 65 A2 01 03 01 8D 72 D6 43':{
		name:'American Express Blue Card'
	},
	'3B 6A 00 00 80 66 A1 09 02 01 63 0E 90 00':{
		name:'Danish Visa/Dankort',
		info:'UK MBNA MasterCard	\
			Visa Card - Worldcard - YapıKredi / Turkey	\
			VISA - Lloyds TSB DEBIT	\
			UK Halifax Visa Debit'
	},
	'3B 6A 00 00 80 66 A2 0A 01 01 8B 0E 90 00':{
		name:'CAP-EMV demo card'
	},
	'3B 6A 00 FF 41 42 43 44 32 45 46 47 48 49':{
		name:'Austria card - JCOP 31/36K'
	},
	'3B 6B .. FF 80 62 .. A2 56 46 69 6E 45 49 44':{
		name:'JCOP20 v2.x'
	},
	'3B 6B 00 00 00 31 80 64 2D A0 02 0C 8C 61 27':{
		name:'SmartEMV prototype'
	},
	'3B 6B 00 00 00 31 80 64 43 B0 02 00 8C 61 27':{
		name:'Bull Odyssey 1.2 (Javacard 2.0)'
	},
	'3B 6B 00 00 00 31 C0 64 A9 EC 01 00 82 90 00':{
		name:'Entropia Universe Gold card',
		info:'http://account.entropiauniverse.com/account/security/'
	},
	'3B 6B 00 00 80 65 A1 09 03 01 97 83 0E 90 00':{
		name:'Visa Card - Worldcard - YapıKredi / Turkey'
	},
	'3B 6B 00 00 80 65 B0 83 01 01 74 83 00 90 00':{
		name:'GemXpresso Pro R3 with 64K EEPROM'
	},
	'3B 6B 00 00 80 65 B0 83 01 03 74 83 00 90 00':{
		name:'Gemplus GemXpresso PRO 64K R3 v1'
	},
	'3B 6B 00 00 80 65 B0 83 01 04 74 83 00 90 00':{
		name:'Gemplus GXP3 64V2N',
		info:'U.S. Department of Defense Common Access Card (DoD CAC)'
	},
	'3B 6B 00 FF 33 00 00 09 FA 10 00 80 01 FF FF':{
		name:'Atmel 6464C PRO 64K'
	},
	'3B 6B 00 FF 56 43 41 52 44 5F 4E 53 53':{
		name:'NSSVirtual smart card for qemu'
	},
	'3B 6C 00 00 10 10 10 30 00 00 00 00 00 00 00 00':{
		name:'Datacard Group Aptura Development Card V1.1b'
	},
	'3B 6C 00 00 42 6C 75 6C 6F 67 6F 6E 20 34 4B 42':{
		name:'eID Blutronics Blulogon 4K',
		info:'http://shop.blutronics.com/Prodotti.asp'
	},
	'3B 6C 00 02 36 61 86 38 4B 8C 13 04 62 03 59 8A':{
		name:'Nagravision, Swiss mode'
	},
	'3B 6D 00 00 00 31 80 64 2D A0 04 0C 71 96 8C 61 29':{
		name:'UK Co-operative Bank Visa Debit (produced 2002)'
	},
	'3B 6D 00 00 00 31 80 71 96 64 33 D1 01 00 82 90 00':{
		name:'DeLaRue GalactIC JavaCard'
	},
	'3B 6D 00 00 00 31 C0 71 D6 64 11 22 33 01 83 90 00':{
		name:'Egg (bank) VISA',
		info:'First Direct (bank) Maestro card	\
			First Direct Gold VISA	\
			UK Barclaycard Platinum VISA	\
			UK Barclaycard VISA	\
			UK Halifax Platinum VISA	\
			UK HSBC MasterCard	\
			UCFIN (Italy) "UniCreditCard Free" or "Plus" (VISA or MasterCard) credit card'
	},
	'3B 6D 00 00 00 31 C0 71 D6 64 19 16 01 00 84 90 00':{
		name:'Eurocard Corporate MasterCard issued by Eurocard AB Sweden',
		info:'Capital One (UK) MasterCard	\
			VISA card, issued by Swedbank Latvia	\
			MasterCard issued by Swedbank Estonia (manufacturer Oberthur)'
	},
	'3B 6D 00 00 00 31 C0 71 D6 64 34 C7 01 00 84 90 00':{
		name:'DeLaRue ProlifIC'
	},
	'3B 6D 00 00 00 31 C0 71 D6 64 34 C7 02 00 84 90 00':{
		name:'Cybelys card (Thalys fidelity card)'
	},
	'3B 6D 00 00 00 31 C0 71 D6 64 38 D0 02 00 84 90 00':{
		name:'EMV Visa Electron (Oberthur)'
	},
	'3B 6D 00 00 00 31 C0 71 D6 64 38 D0 03 00 84 90 00':{
		name:'HSBC Visa/MasterCard credit card',
		info:'Barclay Card MasterCard'
	},
	'3B 6D 00 00 00 31 C0 71 D6 64 4E D8 01 01 84 90 00':{
		name:'UK Capital One Platinum MasterCard'
	},
	'3B 6D 00 00 00 31 C0 71 D6 64 58 D7 01 00 84 90 00':{
		name:'UK Nationwide Bank Visa Delta',
		info:'UK First Direct Maestro	\
			UK Halifax Platinum Visa	\
			UK Co-operative Bank Visa Debit (produced 2003-2004)	\
			UK HSBC LiveCash Solo Debit card'
	},
	'3B 6D 00 00 00 31 C0 71 D6 65 11 22 33 01 83 90 00':{
		name:'UK Co-operative Bank Visa Debit (produced 2006)'
	},
	'3B 6D 00 00 57 44 29 6C 80 86 93 D1 27 1F 13 32 3D':{
		name:'SCSTA (Transport)'
	},
	'3B 6D 00 00 57 44 29 6C 80 86 93 D6 03 EE 08 2A 3D':{
		name:'SCSTA (Transport)'
	},
	'3B 6D 00 00 80 31 80 65 B0 06 01 01 77 83 00 90 00':{
		name:'GemXpresso Lite: with EMV application'
	},
	'3B 6D 00 00 80 31 80 65 B0 07 02 02 89 83 00 90 00':{
		name:'JCOP30 contact interface'
	},
	'3B 6D 00 00 80 31 80 65 B0 43 01 00 77 83 00 90 00':{
		name:'Gemplus GemXpresso Lite'
	},
	'3B 6D 00 00 80 31 80 65 B0 83 01 02 90 83 00 90 00':{
		name:'DeutscheBank Identification card'
	},
	'3B 6D 00 00 80 31 80 65 B0 83 02 04 7E 83 00 90 00':{
		name:'LuxTrust card',
		info:'https://www.luxtrust.lu/solutions/comp/cartech2	\
			https://www.luxtrust.lu/faq/middleware/middleware'
	},
	'3B 6D 00 00 80 31 80 65 B0 83 11 40 C8 83 00 90 00':{
		name:'Gemalto TOP IM',
		info:'(Old name GemSafeXpresso 64)'
	},
	'3B 6D 00 00 80 31 80 65 B0 87 27 01 BC 83 08 90 00':{
		name:'Kazcommertsbank (http://en.kkb.kz/page/WhoWeAre)',
		info:'one of the biggest banks in Republic of Kazakhstan'
	},
	'3B 6D 00 00 80 67 A1 11 01 01 64 08 55 83 0E 90 00':{
		name:'Italian Intesa SanPaolo Maestro'
	},
	'3B 6D 00 FF 00 31 80 71 8E 64 48 D5 02 00 82 90 00':{
		name:'Blue for Business, American Express@Business'
	},
	'3B 6D 00 FF 80 65 53 43 01 0D 06 73 94 21 1B 81 0[1,5]':{
		name:'Giesecke & Devrient CardToken 350 (ICCD)'
	},
	'3B 6D 00 FF 80 73 00 21 13 57 4A 54 48 61 31 47 00':{
		name:'ActiveKey SIM'
	},
	'3B 6D 00 FF 80 73 00 21 13 57 4A 54 48 61 31 48 00':{
		name:'Spanish Medical College Card'
	},
	'3B 6E 00 00 00 31 80 71 86 65 01 64 02 22 32 80 90 00':{
		name:'MasterCard Card - bonus plus (paypass) - Garanti Bank / Turkey'
	},
	'3B 6E 00 00 00 31 80 71 86 65 01 64 02 22 32 83 90 00':{
		name:'MasterCard Card - bonus YKM - Garanti Bank / Turkey'
	},
	'3B 6E 00 00 00 31 80 71 86 65 01 67 02 A0 0A 83 90 00':{
		name:'Australian ANZ First Visa Card from the ANZ',
		info:'(Australia and New Zealand) Bank'
	},
	'3B 6E 00 00 00 31 80 71 86 65 47 44 23 01 02 83 90 00':{
		name:'Nat West Master Card'
	},
	'3B 6E 00 00 00 31 80 71 86 65 47 44 24 01 81 83 90 00':{
		name:'MasterCard Card - Maximum - IS Bank / Turkey',
		info:'Visa Card - Axess - Akbank / Turkey'
	},
	'3B 6E 00 00 00 31 C0 65 54 B6 01 00 84 71 D6 8C 61 2C':{
		name:'Kazakhstan Centrcredit bank VISA electron card (http://www.bcc.kz/en/)'
	},
	'3B 6E 00 00 00 31 C0 65 54 B6 01 00 84 71 D6 8C 61 31':{
		name:'UK BARCLAYS VISA Connect Debit card.',
		info:'The chip is used for the Chip&PIN application common for all UK-issued cards: http://www.chipandpin.co.uk/'
	},
	'3B 6E 00 00 00 31 C0 65 76 B4 01 01 60 71 D6 8C 61 1F':{
		name:'MasterCard Silver from Viseca Card Services SA',
		info:'http://www.viseca.ch/html/en/kreditkarten/produkte_neutrale_karten.php'
	},
	'3B 6E 00 00 00 31 C0 65 77 B2 01 01 47 71 D6 8C 61 33':{
		name:'VISA Credit Card (National Bank of Greece)'
	},
	'3B 6E 00 00 00 31 C0 65 77 B2 01 03 47 71 D6 8C 61 31':{
		name:'UK Barclaycard Business VISA',
		info:'Nationwide Building Society (UK) Visa Debit and Credit Cards'
	},
	'3B 6E 00 00 00 31 C0 65 77 B2 01 03 47 71 D6 8C 61 37':{
		name:'Italian Soldintasca Sanpaolo prepaid VISA-Electron'
	},
	'3B 6E 00 00 00 31 C0 65 77 B3 01 00 70 71 D6 8C 61 ..':{
		name:'Italian Bancomat (debit card)'
	},
	'3B 6E 00 00 00 31 C0 65 7C B5 01 00 80 71 D6 8C 61 2C':{
		name:'Kazakhstan Kazkom bank VISA electron card (http://en.kkb.kz/)'
	},
	'3B 6E 00 00 00 31 C0 65 7C B5 01 00 80 71 D6 8C 61 35':{
		name:'MasterCard Classic, issued by Avangard Bank (Russia)',
		info:'http://avangard.ru/'
	},
	'3B 6E 00 00 00 31 C0 65 7C B5 01 00 80 71 D6 8C 61 37':{
		name:'Swedbank MasterCard card'
	},
	'3B 6E 00 00 00 31 C0 65 BC D0 02 01 06 71 D6 8C 61 2E':{
		name:'Lloyds TSB Mastercard Credit Card'
	},
	'3B 6E 00 00 00 31 C0 65 BC D0 02 01 06 71 D6 8C 61 33':{
		name:'Lloyds TSB Visa Debit'
	},
	'3B 6E 00 00 00 31 C0 65 BC D1 02 01 01 71 D6 8C 61 33':{
		name:'Travelex Cash Passport - Prepaid MasterCard Currency Card'
	},
	'3B 6E 00 00 00 31 C0 65 BC D1 02 01 01 71 D6 8C 61 35':{
		name:'MasterCard Card, issues by Rabobank in the Netherlands'
	},
	'3B 6E 00 00 00 31 C0 65 D3 C1 02 01 28 71 D6 8C 61 22':{
		name:'Visa debit card'
	},
	'3B 6E 00 00 00 31 C0 65 D3 C1 02 01 28 71 D6 8C 61 33':{
		name:'SberBank Silver Debit Card'
	},
	'3B 6E 00 00 00 31 C0 65 D3 C1 02 01 28 71 D6 8C 61 39':{
		name:'Paypal Italy prepaid Mastercard'
	},
	'3B 6E 00 00 00 31 C0 65 D3 C2 02 00 05 71 D6 8C 61 35':{
		name:'Italian Intesa SanPaolo VISA'
	},
	'3B 6E 00 00 00 31 C0 65 D3 C2 02 00 05 71 D6 8C 61 39':{
		name:'Italian Bancomat (Cassa di Risparmio di Rimini) (bank card)'
	},
	'3B 6E 00 00 00 31 C0 65 E2 C4 02 02 01 71 D6 8C 61 25':{
		name:'Spanish "Santander" bank - Maestro debit card - Made by gemalto sp SA'
	},
	'3B 6E 00 00 00 31 C0 65 E7 D2 02 01 10 71 D6 8C 61 37':{
		name:'UCFIN (Italy) "UniCreditCard Free" or "Plus" (VISA or MasterCard) credit card'
	},
	'3B 6E 00 00 00 31 C0 65 EC D4 02 00 08 71 D6 8C 61 33':{
		name:'Victoria Bank (Republic of Moldova) - Visa Electron'
	},
	'3B 6E 00 00 00 31 C0 71 86 65 01 64 02 22 33 83 90 00':{
		name:'UK NatWest ServiceCard 100 Maestro',
		info:'Visa Card - bonus - Garanti Bank / Turkey	\
			UK Royal Bank of Scotland Highline Maestro Debit'
	},
	'3B 6E 00 00 00 31 C0 71 86 65 01 78 01 27 34 83 90 00':{
		name:'UK NatWest ServiceCard 100 Maestro',
		info:'Visa Card - Gold - CARDFINANS / Turkey'
	},
	'3B 6E 00 00 00 31 C0 71 86 65 01 BB 01 13 3B 83 90 00':{
		name:'NatWest Servicecard 100 - Maestro ATM',
		info:'NatWest Visa Debit'
	},
	'3B 6E 00 00 00 31 C0 71 86 65 02 02 04 04 41 83 90 00':{
		name:'CIBC (Canada) "Platinum" (VISA) credit card',
		info:'ING Direct (Italy) "Gold" (VISA) credit card	\
			ING Direct (Italy) "Bancomat" (V PAY) debit card	\
			HSBC (Canada) (Interac/Cirrus/The Exchange) debit card	\
			UniCredit (Italy) "Bancomat" (Maestro) debit card'
	},
	'3B 6E 00 00 00 31 C0 71 C6 65 01 B0 01 03 37 83 90 00':{
		name:'NatWest (UK) "Business" (MasterCard) credit card',
		info:'NatWest (UK) (Maestro) debit card	\
			Santander Totta (Portugal) "JÁ KÁ KONTA" (VISA Electron) debit card	\
			ANZ (Australia) (VISA) credit card	\
			Millennium BCP (Portugal) (VISA Electron) debit card	\
			OpenBank (Spain) (VISA) credit card	\
			CIBC (Canada) debit card	\
			UniCredit (Italy) "Genius Card" (MasterCard) debit card	\
			UniCredit (Italy) "UniCreditCard Click" (MasterCard) debit card	\
			VISA Electron debit card from the Spanish branch of ING Direct (bank)'
	},
	'3B 6E 00 00 00 31 C0 71 C6 65 01 B0 01 03 3A 83 90 00':{
		name:'MasterCard hostet by Deutsche Bank, Germany',
		info:'Maestro card by Caja de Burgos, Spain	\
			MasterCard Debit Card issued by Spain Openbank (www.openbank.es)'
	},
	'3B 6E 00 00 00 31 C0 71 C6 65 01 B0 01 31 37 83 90 00':{
		name:'Electron VISA Credit Card (BANK OF Cyprus)'
	},
	'3B 6E 00 00 00 31 C0 71 C6 65 42 2C 01 35 35 83 90 00':{
		name:'UniCredit (Italy) "UniCreditCard Classic" (VISA) credit card'
	},
	'3B 6E 00 00 00 31 C0 71 C6 65 71 0C 04 35 36 83 90 00':{
		name:'NatWest VISA Business Debit',
		info:'VISA Debit Card (NatWest / ING DiBa)	\
			Komercni Banka, A.S., Visa Debit, Czech Republic'
	},
	'3B 6E 00 00 00 31 C0 71 D6 65 12 0D 01 81 00 83 90 00':{
		name:'VISA Gold (VISA ORO) from the Spanish branch of ING Direct (bank)',
		info:'http://www.ingdirect.es/tarjetas-ing/	\
			Visa Credit Card issued by Spain Cetelem for PayPal (www.paypal.es/cetelem)'
	},
	'3B 6E 00 00 00 31 C0 71 D6 65 7D E4 01 10 A0 83 90 00':{
		name:'VISA card, issued by the ANWB, the Dutch national Automobile club',
		info:'VISA Card - Maximum - Oyak Bank / Turkey	\
			VISA - Barclays Premier'
	},
	'3B 6E 00 00 00 31 C0 71 D6 65 7D E4 01 11 A0 83 90 00':{
		name:'UK CapitalOne Platinum Mastercard'
	},
	'3B 6E 00 00 00 31 C0 71 D6 65 94 E8 03 40 00 83 90 00':{
		name:'First Direct UK VISA Debit',
		info:'Italian Cariparma Maestro	\
			"Net+ Mastercard card" from netpluscards.com, Neteller	\
			UCFIN (Italy) "UniCreditCard Free" (VISA) credit card'
	},
	'3B 6E 00 00 00 31 C0 71 D6 65 A3 03 01 80 00 83 90 00':{
		name:'UK First Direct (HSBC) Maestro / Cirrus',
		info:'UK Capital One Platinum MasterCard	\
			HSBC Commercial Card Visa	\
			VISA issued by Czech\'s "Komercni banka" (member of Societe General group)	\
			Portugal Caixa Geral de Depositos debit card	\
			The co-operative bank VISA Debit	\
			SberBank Silver Debit Card (VISA)'
	},
	'3B 6E 00 00 00 31 C0 71 D6 65 CE 0B 01 40 00 83 90 00':{
		name:'Nationwide InvestDirect (bank)',
		info:'SberBank Gold Credit Card (VISA)'
	},
	'3B 6E 00 00 00 62 .. 43 57 41 56 41 4E 54 10 81 90 00':{
		name:'Setec SetCOS 4.3.0'
	},
	'3B 6E 00 00 00 62 00 00 57 41 56 41 4E 54 10 81 90 00':{
		name:'Setec SetCOS 5.1.0 EMV + AVANT'
	},
	'3B 6E 00 00 00 62 16 43 .. 41 56 41 4E 54 10 81 .. ..':{
		name:'Setec SetCos 4.3.0'
	},
	'3B 6E 00 00 45 73 74 45 49 44 20 76 65 72 20 31 2E 30':{
		name:'Estonian Identity Card (EstEID v1.1 "MULTOS" cold)'
	},
	'3B 6E 00 00 57 44 36 13 69 86 93 02 32 12 56 28 25 32':{
		name:'Watchdata Brazil CSP v1.0 (Banco do Brasil)',
		info:'http://www.watchdata.com/en/bank/solutions.jsp'
	},
	'3B 6E 00 00 62 6C 75 63 61 72 64 20 32 4B 42 2F 76 34':{
		name:'eID Blutronics Blucard 2K',
		info:'http://blucard.blutronics.com'
	},
	'3B 6E 00 00 62 6C 75 63 61 72 64 20 34 4B 42 2F 76 34':{
		name:'eID Blutronics Blucard 4K',
		info:'http://blucard.blutronics.com'
	},
	'3B 6E 00 00 62 6C 75 63 61 72 64 20 38 4B 42 2F 76 34':{
		name:'eID Blutronics Blucard 8K',
		info:'http://blucard.blutronics.com'
	},
	'3B 6E 00 00 80 25 A0 00 00 00 28 56 80 10 24 00 01 11':{
		name:'Opencard, new card in Prague, Czech Republic (transport card)'
	},
	'3B 6E 00 00 80 31 80 65 B0 03 01 01 5E 83 00 00 90 00':{
		name:'FirstUSA Visa'
	},
	'3B 6E 00 00 80 31 80 65 B0 03 02 01 5E 83 00 00 90 00':{
		name:'Gemplus GemXpresso 211is'
	},
	'3B 6E 00 00 80 31 80 66 B0 07 03 00 AC 01 83 00 90 00':{
		name:'e-payment card with topup system, propreteary by local bank',
		info:'http://www.klikbca.com/individual/silver/product.html?s=69'
	},
	'3B 6E 00 00 80 31 80 66 B0 84 0C 01 6E 01 83 00 90 00':{
		name:'Nordea (a Skandinavian bank) eID card',
		info:'http://linux.fi/wiki/Nordea_eID'
	},
	'3B 6E 00 00 80 31 80 66 B0 84 12 01 6E 01 83 00 90 00':{
		name:'Barclaycard Platinum VISA'
	},
	'3B 6E 00 00 80 31 80 66 B0 84 16 01 6E 01 83 00 90 00':{
		name:'UK "Barclaycard Gold VISA" with RFID'
	},
	'3B 6E 00 FF 00 62 00 00 57 41 56 41 4E 54 10 81 90 00':{
		name:'debit card (Visa Electron) issued by Nordea bank'
	},
	'3B 6E 00 FF 45 73 74 45 49 44 20 76 65 72 20 31 2E 30':{
		name:'Estonian Identity Card (EstEID v1.0 warm)'
	},
	'3B 6E 00 FF 47 44 2D 47 50 2D 33 32 56 34 2D 44 45 53':{
		name:'Mastercard Ourocard Platinum from Banco do Brasil'
	},
	'3B 6F 00 00 00 66 4D 45 31 61 03 01 53 08 61 04 F0 90 00':{
		name:'Spanish University of Murcia smart ID card - Old version (M.Mar OS) - Also used by many others spanish universities'
	},
	'3B 6F 00 00 00 66 4D 45 31 B1 03 01 53 08 61 04 F0 90 00':{
		name:'Spanish UCAM University smart ID card - (M.Mar OS) - Also used by many others spanish universities'
	},
	'3B 6F 00 00 00 66 4D 45 66 80 03 .. 53 06 61 03 F0 90 00':{
		name:'Millenium Card (www.coruna.es/millennium) municipal city card for A Coruña, Spain.',
		info:'electronic wallet for paying services like parking meter or public service (bus) transportation.'
	},
	'3B 6F 00 00 00 66 4D 45 66 84 03 09 53 03 61 04 F0 90 00':{
		name:'spanish MAESTRO debit card, from Unicaja bank'
	},
	'3B 6F 00 00 00 67 2. 43 46 49 53 45 12 52 66 FF 81 90 00':{
		name:'Setec SetCOS 4.3.2'
	},
	'3B 6F 00 00 00 68 2B 42 05 02 46 49 53 45 31 C8 07 90 00':{
		name:'MAESTRO card, issued by Swedbank Estonia'
	},
	'3B 6F 00 00 00 68 2C 42 05 02 46 49 53 45 31 C8 07 90 00':{
		name:'VISA card, issued by Swedbank Latvia',
		info:'VISA card, issued by the Latvian bank "Latvijas Krajbanka"'
	},
	'3B 6F 00 00 62 6C 75 63 61 72 64 20 31 36 4B 42 2F 76 34':{
		name:'eID Blutronics Blucard 16K',
		info:'http://blucard.blutronics.com'
	},
	'3B 6F 00 00 80 31 C0 52 00 83 64 02 19 08 32 83 83 90 00':{
		name:'Bancomer Mexican Bank'
	},
	'3B 6F 00 00 80 31 C0 52 07 6F 64 02 19 04 32 83 83 90 00':{
		name:'Credit Card IXE Banco, México'
	},
	'3B 6F 00 00 80 31 C0 52 0A 47 64 02 B3 02 37 83 83 90 00':{
		name:'Visa debit card issued by the Spanish bank "tubancaja"'
	},
	'3B 6F 00 00 80 31 C0 52 13 2F 64 02 19 08 32 83 83 90 00':{
		name:'Cajamadrid-UCM (Madrid, Spain) Cash/Visa Electron'
	},
	'3B 6F 00 00 80 31 C0 52 16 B9 64 05 66 80 32 83 83 90 00':{
		name:'Banorte Mexican Bank'
	},
	'3B 6F 00 00 80 31 E0 5B 4E 4F 4B 00 00 00 00 00 00 02 00':{
		name:'Norsk-Tipping (Buypass) Monodex card'
	},
	'3B 6F 00 00 80 31 E0 5B 54 57 44 00 00 00 00 00 00 02 00':{
		name:'MasterCard credit card for Far Eastern Bank, Taiwan'
	},
	'3B 6F 00 00 80 31 E0 5B 59 54 4C 00 00 00 00 00 00 02 00':{
		name:'Turkish Armed Force - Daily Social Facility Usage Card'
	},
	'3B 6F 00 00 80 31 E0 6B 01 03 05 02 E0 55 55 55 55 55 55':{
		name:'American Express Gold Credit Card'
	},
	'3B 6F 00 00 80 31 E0 6B 02 01 02 07 01 55 55 55 55 55 55':{
		name:'Brazilian state bank: Caixa Econômica Federal debit card'
	},
	'3B 6F 00 00 80 31 E0 6B 04 03 03 04 05 55 55 55 55 55 55':{
		name:'Blue American Express Card'
	},
	'3B 6F 00 00 80 31 E0 6B 04 06 03 04 40 55 55 55 55 55 55':{
		name:'Blue American Express Card'
	},
	'3B 6F 00 00 80 31 E0 6B 04 06 05 02 17 55 55 55 55 55 55':{
		name:'Marx Software Security - Cryptoken M2048, MULTOS, Infineon SLE66CX, 64kByte',
		info:'http://www.marx.com/en/'
	},
	'3B 6F 00 00 80 31 E0 6B 04 20 05 02 30 55 55 55 55 55 55':{
		name:'Buypass card for Norsk Tipping (http://norsk-tipping.no)'
	},
	'3B 6F 00 00 80 31 E0 6B 04 20 05 02 47 55 55 55 55 55 55':{
		name:'"Norsk-Tipping (Buypass) Monodex card"',
		info:'bought from http://buypass.no and used to access norwegian state services at http://altinn.no'
	},
	'3B 6F 00 00 80 31 E0 6B 04 20 05 02 58 55 55 55 55 55 55':{
		name:'Norsk Tipping online player card <http://www.norsk-tipping.no/>',
		info:'Norwegian government controlled betting company'
	},
	'3B 6F 00 00 80 31 E0 6B 04 21 05 02 61 55 55 55 55 55 55':{
		name:'NORSK TIPPING NORWAY',
		info:'http://www.norsk-tipping.no/'
	},
	'3B 6F 00 00 80 31 E0 6B 05 08 05 02 83 55 55 55 55 55 55':{
		name:'Bank of Montreal debit card'
	},
	'3B 6F 00 00 80 31 E0 6B 05 12 05 02 87 55 55 55 55 55 55':{
		name:'American Express credit card'
	},
	'3B 6F 00 00 80 31 E0 6B 07 14 05 02 8A 55 55 55 55 55 55':{
		name:'SolutionsBanking Canada Interac debit card'
	},
	'3B 6F 00 00 80 31 E0 6B 84 06 03 04 31 55 55 55 55 55 55':{
		name:'Multos Developer Sample'
	},
	'3B 6F 00 00 80 31 E0 6B 84 06 0E 02 02 55 55 55 55 55 55':{
		name:'Multos Developer Sample'
	},
	'3B 6F 00 00 80 31 E0 6B 84 20 05 02 39 55 55 55 55 55 55':{
		name:'Multos 14D (2-0-10) 64K Developer Card'
	},
	'3B 6F 00 00 80 31 E0 6B 84 20 05 02 42 55 55 55 55 55 55':{
		name:'Multos 14Dc(6-0-13) 64K Dual-Interface Developer Card'
	},
	'3B 6F 00 00 80 5A .. 0[1-5] .. .. .. .. .. .. .. .. 82 90 00':{
		name:'Card supporting a Calypso application Rev 1',
		info:'Navigo (France) transport card	\
			ACTV (Italy) transport card'
	},
	'3B 6F 00 00 80 5A 08 03 03 00 00 00 01 56 64 F6 82 90 00':{
		name:'transport bus/tram "atout.tag" semitag grenoble'
	},
	'3B 6F 00 00 80 5A 08 06 08 20 02 00 10 00 3E DC 82 90 00':{
		name:'CTS (Compagnie des Transports Strasbourgeois) to hold transportation tickets'
	},
	'3B 6F 00 00 80 5A 08 06 08 20 02 00 10 00 48 EA 82 90 00':{
		name:'french public transport card (www.cts-strasbourg.fr)'
	},
	'3B 6F 00 00 80 5A 08 06 08 20 02 00 92 35 1E 52 82 90 00':{
		name:'Public transport card of Lisbon (www.carris.pt)'
	},
	'3B 6F 00 00 80 5A 08 06 08 20 02 00 92 37 89 73 82 90 00':{
		name:'Lisboa Viva subway pass from Portugal'
	},
	'3B 6F 00 00 80 5A 08 06 08 20 02 23 92 16 D1 BD 82 90 00':{
		name:'"OPUS Card" Montreal\'s transit system by oberthur cardsystems'
	},
	'3B 6F 00 00 80 5A 08 06 08 20 02 23 92 1B 4B 59 82 90 00':{
		name:'"OPUS Card" Quebec\'s Bus system.'
	},
	'3B 6F 00 00 80 5A 0A 07 06 20 04 2B 10 5A 8F 94 82 90 00':{
		name:'Rav-Kav, Used by Israeli public transportation companies (Transport)'
	},
	'3B 6F 00 00 80 5A 29 13 09 10 11 3[3,5] .. .. .. .. 82 90 00':{
		name:'MOBIB (reseau transport en commun Bruxelles, Belgique)',
		info:'http://www.uclouvain.be/sites/security/mobib.html	\
			Calypso application similar to French NAVIGO'
	},
	'3B 6F 00 00 80 5A 43 4F 4C 44 00 00 00 00 00 00 82 90 00':{
		name:'LBB Berlin, MasterCard (ADAC branding?)'
	},
	'3B 6F 00 00 80 66 45 46 01 38 18 03 53 02 31 10 82 90 00':{
		name:'Fábrica Nacional de Moneda y Timbre FNMT WG10',
		info:'http://www.fnmt.es/es/html/tage/fichaTarjeta/fp1_ta_01.asp'
	},
	'3B 6F 00 00 80 66 45 46 01 38 18 03 53 02 31 24 82 90 00':{
		name:'Electronic purse of the Universidad Politecnica of Madrid (provided by Banco Santander)'
	},
	'3B 6F 00 00 80 66 57 59 01 00 08 03 53 07 61 14 82 90 00':{
		name:'E-money Vitrasa Card - Public transport in Vigo'
	},
	'3B 6F 00 00 80 66 A2 03 02 02 3D 07 53 02 31 10 82 90 00':{
		name:'Electronic purse of the Universidad Politecnica of Madrid (provided by Banco Santander)'
	},
	'3B 6F 00 00 80 66 B0 07 01 01 77 07 53 02 31 10 82 90 00':{
		name:'University ID card (issued by Banco Santander Central Hispano)',
		info:'.	\
			Universitat Politècnica de Catalunya (UPC.edu)	\
			https://www.upc.edu/identitatdigital	\
			http://www.univers.upc.edu/comunitatupc/NOUCARNETUPC	\
			.	\
			Universitat Ramon Llull (URL)	\
			http://www.url.edu/cont/url/carnet.php'
	},
	'3B 6F 00 00 80 66 B0 07 01 01 77 07 53 02 31 24 82 90 00':{
		name:'Santander 4B Maestro',
		info:'University of Santiago de Compostela. Spain	\
			Polytechnical University of Madrid, Spain'
	},
	'3B 6F 00 FF 00 56 72 75 54 6F 6B 6E 73 30 20 00 00 90 00':{
		name:'ruToken-S (USB token)',
		info:'http://www.rutoken.ru/products/rutoken/rutoken-s/'
	},
	'3B 6F 00 FF 52 53 41 53 65 63 75 72 49 44 28 52 29 31 30':{
		name:'RSA SecurID SID800 token'
	},
	'3B 6F 00 FF 53 46 53 45 2D 43 58 33 32 32 2D 56 18 02 02':{
		name:'Giesecke & Devrient SmartCafe Expert 2.0'
	},
	'3B 75 12 00 00 29 05 01 04 01':{
		name:'CAC Cryptographic Service Provider',
		info:'Axalto Cyberflex Access 64K V1 SM 4.1'
	},
	'3B 75 13 00 00 43 09 EA 90 00':{
		name:'Vitale 2 (french health card)'
	},
	'3B 75 13 00 00 44 09 EA 90 00':{
		name:'Carte Vitale 2 (Nouvelle version avec photo)'
	},
	'3B 75 13 00 00 45 09 EA 90 00':{
		name:'Carte Vitale 2 (French health card)'
	},
	'3B 75 13 00 00 9C 02 02 01 02':{
		name:'Cyberflex Access 32k v2'
	},
	'3B 75 94 00 00 62 02 02 0[1-3] 01':{
		name:'Schlumberger Cyberflex 32K e-gate',
		info:'Gemalto TOP US (product code HWP115278A)'
	},
	'3B 76 11 00 00 00 9C 11 01 02 02':{
		name:'Schlumberger Cyberflex Access 32K'
	},
	'3B 76 11 00 00 00 9C 11 01 02 03':{
		name:'RSA SecureID 5100'
	},
	'3B 76 12 00 00 00 9C 11 01 03 03':{
		name:'Precise BioMatch (TM) JavaCard (Schlumberger)',
		info:'www.precisebiometrics.com'
	},
	'3B 76 13 00 00 80 62 07 41 81 80':{
		name:'Generic mass produced Motorola smart card'
	},
	'3B 76 13 00 00 80 62 07 41 81 81':{
		name:'TransLink card (discontinued San Francisco Bay Area transit card)'
	},
	'3B 76 98 00 00 00 9C 11 01 01 02':{
		name:'CyberFlex Access 32'
	},
	'3B 78 12 00 00 47 C4 03 00 8F F1 90 00':{
		name:'Sattelite bg 23.5 East cryptoworks card'
	},
	'3B 78 12 00 00 54 C4 03 00 8F F1 90 00':{
		name:'Skylink irdeto from Towercom a.s. company'
	},
	'3B 78 12 00 00 65 C4 05 00 8F F1 90 00':{
		name:'Digitürk Cryptoworks'
	},
	'3B 78 12 00 00 65 C4 05 05 8F F1 90 00':{
		name:'Turkie Digiturk Cryptoworks'
	},
	'3B 78 12 00 00 A0 C4 03 06 8F F1 90 00':{
		name:'ORF Digital (Irdeto/Cryptoworks) (pay tv)'
	},
	'3B 78 12 00 00 A0 C4 03 07 8F F1 90 00':{
		name:'IRDETO-Smartcard for crytoworks for austrian television (ORF), DVB-s'
	},
	'3B 78 12 00 00 A0 C4 06 00 8F F1 90 00':{
		name:'Cryptoworks/Nagravision decoding card'
	},
	'3B 78 12 00 00 A0 C4 06 07 8F F1 90 00':{
		name:'Skylink CZ/SK - Cryptoworks'
	},
	'3B 78 13 00 00 00 73 C8 40 10 00 90 00':{
		name:'credit/debit card from issued by Finnish credit authority Luottokunta Oy'
	},
	'3B 79 18 00 00 80 54 43 4F 4C 44 82 90 00':{
		name:'LBB VISA Card'
	},
	'3B 79 98 00 00 50 01 01 04 01 00 01 01 A9':{
		name:'Gemalto PayFlex used in Aristocrat System 7000 Casino Management System (South Africa only)'
	},
	'3B 7A 11 00 00 48 44 32 2E 30 34 6F FF 90 00':{
		name:'User Smartcard provided with the Hiddn Crypto Adapter (www.hiddn.no)'
	},
	'3B 7A 11 00 02 48 4F 53 54 06 03 19 02 90 00':{
		name:'Swedish bankcard with Mastercard from ICA-banken'
	},
	'3B 7A 13 00 00 00 09 A5 05 01 00 B7 01 A6 01':{
		name:'"cleyris" authentication card. monpass.santé from Mutuelle Générale'
	},
	'3B 7A 18 00 00 73 66 74 65 20 63 64 31 34 34':{
		name:'Republic Slovenia e-Gov, Ministry of Public Administration',
		info:'SIGOV-CA, Slovenian Governmental Certification Authority'
	},
	'3B 7A 18 00 00 73 66 74 65 2D 63 64 30 38 30':{
		name:'HYPOnet online banking card / Croatia'
	},
	'3B 7A 18 00 FF 4A 43 4F 50 32 31 56 32 33 31':{
		name:'JCOP21 18K'
	},
	'3B 7A 94 00 00 80 65 A2 01 01 01 3D 72 D6 43':{
		name:'Gemplus GemXpresso Pro R3 E32 PK'
	},
	'3B 7B .. 00 00 80 62 0. 51 56 46 69 6E 45 49 44':{
		name:'Setec SetCOS 5.1.0'
	},
	'3B 7B 18 00 00 00 31 C0 64 77 E3 03 00 82 90 00':{
		name:'Oberthur Cosmopolic 64K v5.2 D'
	},
	'3B 7B 18 00 00 00 31 C0 64 77 E9 10 00 01 90 00':{
		name:'Oberthur Card Systems: Cosmo 64 RSA V5.4 (ISK Key Set: 404142 .. 4E4F)'
	},
	'3B 7B 18 00 00 00 31 C0 64 C6 FC 10 00 07 90 00':{
		name:'Sberbank of the RUSSIAN federation'
	},
	'3B 7B 18 00 00 00 31 E8 54 27 E6 00 00 01 90 00':{
		name:'Oberthur ID-One COSMO 64k v.5'
	},
	'3B 7B 18 00 00 80 62 01 54 56 46 69 6E 45 49 44':{
		name:'FineID identity card for organizations',
		info:'http://fineid.fi/default.aspx?id=491	\
			http://www.opensc-project.org/opensc/wiki/FinnishEid'
	},
	'3B 7B 94 00 00 80 62 1[1,2] 51 56 46 69 6E 45 49 44':{
		name:'Finnish Electronic ID card (fineid card www.fineid.fi)'
	},
	'3B 7B 94 00 00 80 65 B0 83 01 0[1,3] 74 83 00 90 00':{
		name:'Gemplus GemXpresso Pro R3 (E64 PK)'
	},
	'3B 7B 95 00 00 80 65 B0 83 01 04 74 83 00 90 00':{
		name:'Gemplus GemXpresso Pro 64K R3 FIPS v2'
	},
	'3B 7D 11 00 00 00 31 80 71 8E 64 52 D9 01 00 82 90 00':{
		name:'Oberthur Galactic V2'
	},
	'3B 7D 11 00 00 00 31 80 71 8E 64 77 E3 01 00 82 90 00':{
		name:'Oberthur Cosmo 64k RSA v5'
	},
	'3B 7D 11 00 00 00 31 80 71 8E 64 77 E3 02 00 82 90 00':{
		name:'Oberthur 64k v5/2.2.0'
	},
	'3B 7D 11 00 00 00 31 80 71 8E 64 86 D6 01 00 81 90 00':{
		name:'DOD-CAC'
	},
	'3B 7D 13 00 00 4D 44 57 2D 49 41 53 2D 43 41 52 44 32':{
		name:'IAS (Identification, Authentication, and electronic Signature) Premium, profil DGME from Sagem'
	},
	'3B 7D 18 00 00 00 31 80 71 8E 64 77 E3 01 00 82 90 00':{
		name:'Oberthur 64k v4/2.1.1'
	},
	'3B 7D 18 00 02 80 57 59 50 53 49 44 30 33 83 7F 90 00':{
		name:'Sagem YpsID s2 (SafeSign)'
	},
	'3B 7D 94 00 00 57 44 53 05 54 86 93 00 15 6A 5F 13 78':{
		name:'Idea Indian GSM operator SIM'
	},
	'3B 7D 94 00 00 57 44 53 63 96 86 93 00 9D F7 10 00 9D':{
		name:'China Mobile SIM card'
	},
	'3B 7D 94 00 00 57 44 53 72 FD 86 93 11 01 06 75 5B 0F':{
		name:'China Telecom UIM 64K'
	},
	'3B 7D 94 00 00 57 44 53 96 FA 86 93 03 B7 BF BF 5F 63':{
		name:'Airtel India SIM'
	},
	'3B 7D 94 00 00 80 31 80 65 B0 83 01 01 90 83 00 90 00':{
		name:'GemSafeXpresso 16k R3.2'
	},
	'3B 7D 94 00 00 80 31 80 65 B0 83 01 02 90 83 00 90 00':{
		name:'Gem e-Seal',
		info:'(GemSafeXpresso 32k R3.2)	\
			Gemalto Classic TPC - IS'
	},
	'3B 7D 94 00 00 80 31 80 65 B0 83 02 04 7E 83 00 90 00':{
		name:'GXP Pro R3.2 64K, GemSafe applet MPCOS v1.11',
		info:'card issued by Czech National Bank	\
			dual card: chip used for electronic certificates (czech commercial bank use such card to sign money transfer orders sent to national clearing central)'
	},
	'3B 7D 94 00 00 80 31 80 65 B0 83 11 00 AC 83 00 90 00':{
		name:'GemCombiXpresso R4 72K'
	},
	'3B 7D 94 00 00 80 31 80 65 B0 83 11 00 C8 83 00 90 00':{
		name:'personal identity card (ID card) of Republic of Lithuania',
		info:'LuxTrust card'
	},
	'3B 7D 94 00 00 80 31 80 65 B0 83 11 48 C8 83 00 90 00':{
		name:'Online banking http://www.getinbank.pl/'
	},
	'3B 7D 94 00 00 80 31 80 65 B0 83 11 C0 A9 83 00 90 00':{
		name:'GemXpresso R4 72K'
	},
	'3B 7D 95 00 00 80 31 80 65 B0 83 02 04 7E 83 00 90 00':{
		name:'Gemalto\'s Classic TPC HM CC Mifare 1K White PVC',
		info:'(Old name GemSafeXpresso 64K)'
	},
	'3B 7D 95 00 00 80 31 80 65 B0 83 11 00 C8 83 00 90 00':{
		name:'Portuguese ID card'
	},
	'3B 7D 95 00 00 80 31 80 65 B0 83 11 C0 A9 83 00 90 00':{
		name:'Portuguese identity card',
		info:'http://www.cartaodecidadao.pt'
	},
	'3B 7D 96 00 00 80 31 80 65 B0 83 11 00 C8 83 00 90 00':{
		name:'GEMALTO Clasic TPC IM CC'
	},
	'3B 7D 96 00 00 80 31 80 65 B0 83 11 11 AC 83 00 90 00':{
		name:'GEMALTO WM GX4 72 DHS TSA'
	},
	'3B 7D 96 00 00 80 31 80 65 B0 83 11 13 AC 83 00 90 00':{
		name:'CAC card (GEMALTO GCX4 72K DI)'
	},
	'3B 7D 96 00 00 80 31 80 65 B0 83 11 17 D6 83 00 90 00':{
		name:'DoD CAC card issued Jan 14, 2010',
		info:'GEMALTO TOPDLGX4 144	\
			Geneva Conventions Identification Card'
	},
	'3B 7D 96 00 00 80 31 80 65 B0 83 11 40 AC 83 00 90 00':{
		name:'GemXpresso R4 64k'
	},
	'3B 7D 96 00 00 80 31 80 65 B0 83 11 40 C8 83 00 90 00':{
		name:'ING BusinessOnLine Bank eToken / Poland',
		info:'Gemalto Classic TPC - IM'
	},
	'3B 7D 96 00 00 80 31 80 65 B0 83 11 48 C8 83 00 90 00':{
		name:'Gemalto GemSafe V1'
	},
	'3B 7D 96 00 00 80 31 80 65 B0 83 11 C0 A9 83 00 90 00':{
		name:'Gemplus X-Presso Pro 64k'
	},
	'3B 7D 96 00 00 80 31 80 65 B0 83 11 C0 C8 83 00 90 00':{
		name:'TOP IM GX4 from Gemalto (was GemXpresso R4)',
		info:'Java Card 2.2.1	\
			Global Platform 2.1.1 (amendment A)'
	},
	'3B 7D 96 00 00 80 31 80 65 B0 83 11 D0 A9 83 00 90 00':{
		name:'GemSafe V2 (2.04, GemP15-1)',
		info:'Gemplus GemXpresso Pro R3 E32PK	\
			Gemalto TOP IM GX4'
	},
	'3B 7D 96 00 00 80 31 80 65 B0 93 11 D0 A9 83 00 90 00':{
		name:'Gemalto Classic TPC (Trusted PKI Card) IM',
		info:'Classic TPC IM (PKCS#15): 12 x RSA key containers (standard profile)'
	},
	'3B 7D 96 00 00 80 31 80 65 B0 A3 11 00 C8 83 00 00 00':{
		name:'Handelsbanken BankID card (Swedish bank authentication)'
	},
	'3B 7D 96 00 00 80 31 80 65 B0 A3 11 00 C8 83 00 90 00':{
		name:'Swedish eID (Telia IP5a)',
		info:'http://www.telia.se/privat/katalog/VisaProdukt.do?productRef=/privat/produkter_tjanster/bredband/tjanster/sakerhetstjanster/teliae-legitimation.1537014385.product'
	},
	'3B 7E 11 00 00 00 6A 11 63 54 08 30 24 01 .. .. 21 90 01':{
		name:'Sagem Windows for smart cards'
	},
	'3B 7E 13 00 00 00 31 C0 71 C6 65 01 B0 01 04 40 83 90 00':{
		name:'BahnCard / Commerzbank MasterCard Credit Card'
	},
	'3B 7E 13 00 00 00 31 C0 71 C6 65 01 B4 01 04 40 83 90 00':{
		name:'Portugal Millennium BCP MAESTRO debit Card'
	},
	'3B 7E 13 00 00 00 6A 11 63 54 05 48 .. .. .. 01 22 90 00':{
		name:'Sagem Windows for smart cards'
	},
	'3B 7E 94 00 00 80 25 A0 00 00 00 28 56 80 10 12 00 01 16':{
		name:'CryptoPlus CS xg'
	},
	'3B 7E 94 00 00 80 25 A0 00 00 00 28 56 80 10 12 81 01 17':{
		name:'Česká Spořitelna SERVIS24 certificate card',
		info:'http://smallhacks.wordpress.com/2012/05/04/exploring-servis24-certificate-card-from-the-ceska-sporitelna-bank/'
	},
	'3B 7E 94 00 00 80 25 A0 00 00 00 28 56 80 10 24 00 01 11':{
		name:'"OpenCard" - card issued by Prague local authority',
		info:'dual card: chip used for electronic certificates'
	},
	'3B 7E 94 00 00 80 25 D2 03 10 01 00 56 00 00 00 01 01 00':{
		name:'Personal identity card (ID card) of Czech Republic'
	},
	'3B 7E 94 00 00 80 31 80 66 47 50 91 45 03 13 83 0F 90 00':{
		name:'JTOP Trusted Logic'
	},
	'3B 7E 94 00 00 80 31 80 66 47 50 A4 45 05 11 83 0F 90 00':{
		name:'JTOP Trusted Logic'
	},
	'3B 7E 95 00 00 80 31 80 73 34 11 80 82 90 00 00 00 00 00':{
		name:'IAS (Identification, Authentication, and electronic Signature) Premium, profil DGME from Gemalto'
	},
	'3B 7F .. 00 00 00 6A 43 45 52 45 53 02 2C 34 02 ...03 90 00':{
		name:'Ceres ST v2'
	},
	'3B 7F .. 00 00 00 6A 43 45 52 45 53 02 2C 34 03 .. 03 90 00':{
		name:'Ceres ST v3'
	},
	'3B 7F 11 00 00 00 31 C0 53 CA C4 01 64 52 D9 04 00 82 90 00':{
		name:'DoD CAC, Oberthur CosmopolIC 32K V4'
	},
	'3B 7F 11 00 00 00 6A 43 45 52 45 53 02 2C 34 02 00 03 90 00':{
		name:'FNMT-CERES ST (Fábrica Nacional de Moneda y Timbre)'
	},
	'3B 7F 11 00 00 80 31 C0 52 14 1E 64 02 18 19 53 83 83 90 00':{
		name:'Advantis card',
		info:'http://www.sermepa.es/ingles/familiaadvantis.htm'
	},
	'3B 7F 11 00 00 80 31 C0 52 21 57 64 02 18 19 53 83 83 90 00':{
		name:'banking card (www.caixacatalunya.com)',
		info:'student id of Universitat Autonoma de Barcelona'
	},
	'3B 7F 11 00 00 80 31 C0 52 35 31 64 05 66 61 52 83 83 90 00':{
		name:'Oberthur Manufactured VISA Banking card (www.caixaterrassa.cat)'
	},
	'3B 7F 13 00 00 80 31 C0 52 02 71 64 05 62 34 70 83 83 90 00':{
		name:'Mastercard Debit Card issued by Caixa d\'Enginyers (http://www.caixa-enginyers.com ) - Servired'
	},
	'3B 7F 13 00 00 80 31 C0 52 05 6E 64 02 53 04 36 83 83 90 00':{
		name:'Mastercard from Banc Sabadell in Spain'
	},
	'3B 7F 13 00 00 80 31 C0 52 07 7D 64 05 66 99 36 83 83 90 00':{
		name:'VISA CEPSA (Porque tu vuelves) from Spain',
		info:'http://www.porquetuvuelves.com/	\
			Visa Credit Card issued by Citibank (http://www.citibank.es) - Servired'
	},
	'3B 7F 13 00 00 80 31 C0 52 08 49 64 05 66 99 36 83 83 90 00':{
		name:'Spanish bank called BBVA'
	},
	'3B 7F 13 00 00 80 31 C0 52 08 4B 64 05 66 94 61 83 83 90 00':{
		name:'Visa Electron Card from a Spanish bank called "Caja de Ingenieros"'
	},
	'3B 7F 13 00 00 80 31 C0 52 0A A6 64 02 B3 02 37 83 83 90 00':{
		name:'Credit card Visa Classic by "La Caixa" (Spain)'
	},
	'3B 7F 13 00 00 80 31 C0 52 0A D6 64 05 66 94 61 83 83 90 00':{
		name:'Visa Credit Card issued by Caixa d\'Enginyers (http://www.caixa-enginyers.com ) - Servired'
	},
	'3B 7F 13 00 00 80 31 C0 52 0B 71 64 05 66 98 36 83 83 90 00':{
		name:'OuroCard VISA International - Banco do Brasil'
	},
	'3B 7F 13 00 00 80 31 C0 52 0B BB 64 05 66 98 36 83 83 90 00':{
		name:'VISA OUROCARD Banco do Brasil S.A.'
	},
	'3B 7F 13 00 00 80 31 C0 52 0D 1E 64 05 66 94 61 83 83 90 00':{
		name:'Universitat Politecnica de Valencia ID Visa Electron Card, http://www.upv.es'
	},
	'3B 7F 13 00 00 80 31 C0 52 13 0B 64 02 B3 02 37 83 83 90 00':{
		name:'Visa Ourocard Platinum from Banco do Brasil'
	},
	'3B 7F 13 00 00 80 31 C0 52 14 D5 64 05 66 96 61 83 83 90 00':{
		name:'Visa Electron Debit Card issued by Spain Caja Madrid (www.cajamadrid.es)'
	},
	'3B 7F 13 00 00 80 31 C0 52 15 54 64 05 66 98 36 83 83 90 00':{
		name:'VISA Card from Banc Sabadell in Spain'
	},
	'3B 7F 13 00 00 80 31 C0 52 15 CB 64 05 66 96 61 83 83 90 00':{
		name:'Bank, Spanish group BANKIA (www.bankia.es)',
		info:'Visa, Servired	\
			Manufactured by Saetic (http://www.saetic.es/)'
	},
	'3B 7F 13 00 00 80 31 C0 52 16 20 64 05 66 96 61 83 83 90 00':{
		name:'Bank, Spanish BBVA (http://www.bbva.com/)',
		info:'Visa, Servired	\
			Manufactured by Oberthur (http://www.oberthur.com/)'
	},
	'3B 7F 13 00 00 80 31 C0 52 17 2D 64 02 B3 02 37 83 83 90 00':{
		name:'Spanish "cajamar" bank - Visa Electron Debit Card. Made by Tag Systems'
	},
	'3B 7F 13 00 00 80 31 C0 52 17 A0 64 02 B3 02 37 83 83 90 00':{
		name:'Credit card Visa Classic by "La Caixa" (Spain)'
	},
	'3B 7F 13 00 00 80 31 C0 52 17 B4 64 05 66 98 36 83 83 90 00':{
		name:'Credit Card Banorte International, México'
	},
	'3B 7F 13 00 00 80 31 C0 52 18 80 64 05 66 98 36 83 83 90 00':{
		name:'Visa Electron Debit Card issued by "la Caixa"'
	},
	'3B 7F 13 00 00 80 31 C0 52 18 97 64 02 B3 02 37 83 83 90 00':{
		name:'tool-valley (vale-pedagio) from Bradesco'
	},
	'3B 7F 13 00 00 80 31 C0 52 34 D6 64 05 66 94 61 83 83 90 00':{
		name:'Visa Credit Card issued by Spain Obsidiana (www.obsidiana.com)'
	},
	'3B 7F 13 00 00 80 31 C0 52 35 0D 64 02 61 18 63 83 83 90 00':{
		name:'Visa Credit Card issued by Spain Caja Madrid (www.cajamadrid.es)'
	},
	'3B 7F 13 00 FF 45 43 4F 53 76 31 31 30 28 63 29 50 46 42 4D':{
		name:'ECOS-Card [Experimental Card Operating System V.1.1] by Philipp Maier',
		info:'http://www.runningserver.com/?page=runningserver.content.download.ecos'
	},
	'3B 7F 14 00 00 80 41 00 57 4A 2D 49 44 4D 36 34 83 7F 90 00':{
		name:'Electronic CPF in Brazil (Cadastro de Pessoas Físicas)',
		info:'http://pt.wikipedia.org/wiki/E-CPF'
	},
	'3B 7F 18 00 00 00 31 C0 73 9E 01 0B 64 52 D9 03 00 82 90 00':{
		name:'Oberthur Galactic V3 (32k)'
	},
	'3B 7F 18 00 00 00 31 C0 73 9E 01 0B 64 52 D9 04 00 82 90 00':{
		name:'Oberthur CosmopolIC 32K v4 Fast ATR',
		info:'Oberthur Authentic'
	},
	'3B 7F 18 00 00 00 31 C0 73 9E 01 0B 64 52 D9 05 00 82 90 00':{
		name:'Oberthur 32k BIO'
	},
	'3B 7F 18 00 00 80 59 49 44 65 61 59 49 44 65 61 6C 5F 31 2E':{
		name:'e-CNPJ issued by Fenacon (eID)',
		info:'http://www.fenacon.org.br'
	},
	'3B 7F 38 00 00 00 6A 43 45 52 45 53 02 2C 34 02 02 03 90 00':{
		name:'WG10'
	},
	'3B 7F 38 00 00 00 6A 43 45 52 45 53 02 2C 34 03 10 03 90 00':{
		name:'Used card Aragón government (Aragón - España)'
	},
	'3B 7F 38 00 00 00 6A 43 45 52 45 53 02 2C 34 03 20 03 90 00':{
		name:'TiDcarm (Region de Murcia)',
		info:'(Government of the Autonomous region of Murcia, Spain). http://www.carm.es'
	},
	'3B 7F 38 00 00 00 6A 44 4E 49 65 00 02 4C 34 01 13 0F 65 81':{
		name:'DNI (Documento Nacional de Identidad), Spanish ID Card'
	},
	'3B 7F 38 00 00 00 6A 44 4E 49 65 [1,2]0 02 4C 34 01 13 03 90 00':{
		name:'DNI electronico (Spanish electronic ID card)',
		info:'http://www.dnielectronico.es'
	},
	'3B 7F 96 00 00 00 31 B8 64 40 70 14 10 73 94 01 80 82 90 00':{
		name:'IAS/ECC Gemalto (eID)'
	},
	'3B 80 80 01 01':{
		name:'RFID - ISO 14443 Type B',
		info:'Electronic Passport'
	},
	'3B 81 1F 00 CC 52':{
		name:'eToken R2 2242'
	},
	'3B 81 80 01 80 80':{
		name:'RFID - ISO 14443 Type A - NXP DESFire or DESFire EV1',
		info:'"Reiner LoginCard" (or "OWOK", how they name it, https://cardlogin.reiner-sct.com/) - they have been distributed by a german computer magazine ("Computer BILD")	\
			Belgium A-kaart (Antwerp citycard)'
	},
	'3B 82 00 55 19':{
		name:'GSM card \'Hi\' (KPN brand)'
	},
	'3B 82 00 55 22':{
		name:'GSM-SIM TELE2 Smart (Estonia, prepaid)'
	},
	'3B 82 80 01 02 44 ..':{
		name:'RFID - NFC Forum tag type 1 (Topaz)'
	},
	'3B 82 81 31 76 43 C0 02 C5':{
		name:'CardOS/M2 V2.01(SLE44CxxS)'
	},
	'3B 82 81 31 76 43 C1 03 C5':{
		name:'i.ti (ticket card for Collogne/Bonn)',
		info:'CardOS M2 Combi V2.02 (SLE44R42S)'
	},
	'3B 83 00 12 10 96':{
		name:'GSM-SIM T-Mobil D1 (900MHz)'
	},
	'3B 84 00 91 18 01 00':{
		name:'Proximus 075 Belgacom Mobile SIM'
	},
	'3B 84 80 01 00 00 90 00 95':{
		name:'German (test) passport issued in january 2010'
	},
	'3B 84 80 01 01 10 00 06 12':{
		name:'Snapper New Zealand (Type A)'
	},
	'3B 84 80 01 01 10 00 09 1D':{
		name:'snapper (www.snapper.co.nz) prepaid 14443A cards'
	},
	'3B 84 80 01 01 11 20 03 36':{
		name:'Snapper Sprat (Transport)',
		info:'https://www.snapper.co.nz/snapper-store/'
	},
	'3B 84 80 01 01 11 20 03 36 90 00':{
		name:'TMES Total Mobility (Wellington City Council, New Zealand)'
	},
	'3B 84 80 01 04 38 33 B1 BB':{
		name:'Dutch passport'
	},
	'3B 84 80 01 47 77 F4 00 C1':{
		name:'True Money Touch Sim (Thailand)'
	},
	'3B 85 00 12 02 01 00 96':{
		name:'GSM-SIM Victorvox D1 (900MHz)'
	},
	'3B 85 00 87 25 01 38 02':{
		name:'GSM-SIM Viag Interkom E2 Loop GSM (1800MHz)'
	},
	'3B 85 00 87 25 01 39 00':{
		name:'GSM-SIM Telfort (Netherlands) 900 MHz'
	},
	'3B 85 40 20 68 01 01 .. ..':{
		name:'Schlumberger Cryptoflex 8k'
	},
	'3B 85 40 20 68 01 01 00 00':{
		name:'Schlumberger Cryptoflex 8k (no RSA key generation)'
	},
	'3B 85 40 20 68 01 01 03 05':{
		name:'Schlumberger Cryptoflex Key Generation'
	},
	'3B 85 40 20 68 01 01 05 01':{
		name:'Schlumberger Cryptoflex 8k (with RSA key generation)'
	},
	'3B 85 40 FE 68 01 01 02 04':{
		name:'Axalto CryptoFlex 8K'
	},
	'3B 85 40 FF 63 01 01 03 01':{
		name:'Axalto Cryptoflex 16K'
	},
	'3B 85 80 01 20 63 CB A0 00 2C':{
		name:'Visa card from Banque populaire du nord/Casden'
	},
	'3B 85 80 01 20 63 CB A1 80 AD':{
		name:'bpaid: bpost prepaid Mastercard (contactless)',
		info:'http://www.bpost.be/site/fr/residential/finance/bpaid/index.html'
	},
	'3B 85 80 01 4A 4D 52 54 44 41':{
		name:'JMRTD - Java Machine Readable Travel Document (ePassport emulator - http://jmrtd.org/)'
	},
	'3B 85 80 01 4D 79 45 49 44 78':{
		name:'MyEID'
	},
	'3B 85 80 01 80 73 84 21 40 12':{
		name:'Dutch Biometric Passport'
	},
	'3B 86 40 20 68 01 01 02 04 AC':{
		name:'Activcard Gold, SchlumbergerSema Cryptoflex 8k'
	},
	'3B 86 80 01 00 04 9A EE 00 CA BD':{
		name:'ASK CPL 528'
	},
	'3B 86 80 01 06 75 77 81 02 80 00':{
		name:'NXP Mifare DESFire EV1 8K / MF3ICD81',
		info:'"OpenCard" - card issued by Prague local authority	\
			dual card: RFID (1k Mirfare) used for parkimeters and as public traffic ticket'
	},
	'3B 86 80 01 39 30 43 30 32 31 7E':{
		name:'Chase Freedom VISA card'
	},
	'3B 86 80 01 44 49 20 30 32 4D 65':{
		name:'Lufthansa Miles & More Gold MasterCard PayPass'
	},
	'3B 86 80 01 4A 43 4F 50 33 30 12':{
		name:'Mifare ProX T=CL'
	},
	'3B 86 80 01 4A 43 4F 50 33 31 13':{
		name:'JCOP BIO 31 Contactless Card'
	},
	'3B 87 80 01 80 31 80 73 96 12 80 40':{
		name:'Public transport: VRS Verkehrsverbund Rhein-Sieg (Germany, North_Rhine-Westphalia)',
		info:'http://www.vrsinfo.de/englisch/the-vrs/vrs-about-us.html'
	},
	'3B 87 80 01 80 31 C0 73 D6 21 C0 33':{
		name:'Sparkasse Hannover - German contactless GeldKarte (RFID, NFC, girogo)',
		info:'https://www.geldkarte.de/_www/en/pub/geldkarte/service_navigation/about_us.php'
	},
	'3B 87 80 01 C1 05 2F 2F 01 BC D6 A9':{
		name:'RFID - ISO 14443 Type A - NXP Mifare Plus'
	},
	'3B 87 81 31 40 43 4D 46 43 20 31 33 31 6F':{
		name:'Telekom Paycard'
	},
	'3B 88 80 01 00 00 00 00 00 00 00 00 09':{
		name:'Personalausweis (German Identity Card) (eID)'
	},
	'3B 88 80 01 00 00 00 00 00 71 71 00 09':{
		name:'OPUS Public Transport card (Montreal, Quebec, Canada) - Oberthur based',
		info:'http://carteopus.info/	\
			ACTV (Italy) transport card (RFID)'
	},
	'3B 88 80 01 00 00 00 00 00 81 91 10 09':{
		name:'Trenitalia (Italy) fidelity card "CartaFreccia" (RFID)'
	},
	'3B 88 80 01 00 00 00 00 B3 71 71 .0 .A':{
		name:'Public transportation card in Riga, Latvia, called "e-Talons" http://etalons.rigassatiksme.lv/en/payments/activating_the_e-ticket/',
		info:'Belgian MOBIB (transport)'
	},
	'3B 88 80 01 00 00 01 07 01 72 90 00 EC':{
		name:'Belgian passport'
	},
	'3B 88 80 01 00 73 C8 40 00 00 90 00 62':{
		name:'NXP JCOP 31 V2.2 36K - RFID I/F',
		info:'Barclaycard Visa Wave & Pay - RFID I/F'
	},
	'3B 88 80 01 00 73 C8 40 13 00 90 00 71':{
		name:'Nokia 6131 NFC phone',
		info:'http://wiki.forum.nokia.com/index.php/Nokia_6131_NFC_-_FAQs	\
			Giesecke & Devrient’s (G&D) Sm@rtCafé Expert 3.1'
	},
	'3B 88 80 01 31 CC CC 01 77 81 C1 00 0E':{
		name:'Ideal v 1.4 (Transport)'
	},
	'3B 88 80 01 4A 43 4F 50 76 32 34 31 5E':{
		name:'RFID - ISO 14443 Type A - NXP JCOP'
	},
	'3B 88 80 01 C9 12 07 52 02 00 81 10 14':{
		name:'electronic Tickes from the german Transport Association VGN (Verkehrsgemeinschaft Niederrhein)'
	},
	'3B 88 80 01 E1 F3 5E 11 77 83 95 00 35':{
		name:'French biometric ePassport issued in 2012'
	},
	'3B 88 80 01 E1 F3 5E 11 77 83 D5 00 75':{
		name:'German Passport (ePass) (issued June 2009)'
	},
	'3B 88 80 01 E1 F3 5E 13 77 83 D5 00 77':{
		name:'ePerso - German ID card (issued 2011)'
	},
	'3B 88 81 31 20 55 00 57 69 6E 43 61 72 64 29':{
		name:'SmartCard for Windows 1.0'
	},
	'3B 89 00 91 26 91 06 00 01 22 01 00':{
		name:'BT Cellnet SIM'
	},
	'3B 89 40 14 47 47 32 36 4D 35 32 38 30':{
		name:'GSM-SIM e-plus (1800MHz)'
	},
	'3B 89 80 01 00 64 04 15 01 02 00 90 00 EE':{
		name:'German Passport (issued Apr 2007)'
	},
	'3B 89 80 01 45 4D 56 20 30 33 20 20 06 73':{
		name:'Lufthansa Miles & More Gold MasterCard PayPass (old one)',
		info:'Found a reference pointing to NXP	\
			http://www.usingrfid.com/news/read.asp?lc=l17607hx1500zk'
	},
	'3B 89 80 01 4A 43 4F 50 33 31 56 32 32 4A':{
		name:'JCOP 31 v22 72K (with Mifare 1K emulation) - RFID I/F'
	},
	'3B 89 80 01 4A 43 4F 50 34 31 56 32 32 4D':{
		name:'New Zealand e-Passport',
		info:'Philips Semiconductor JCOP41V22'
	},
	'3B 89 80 01 4D 54 43 4F 53 73 01 02 01 3F':{
		name:'Contactless MTCOS',
		info:'http://www.masktech.de/'
	},
	'3B 89 80 01 4D 54 43 4F 53 73 02 01 04 3A':{
		name:'Biometric passport of Czech republic',
		info:'Biometric passport of Libya'
	},
	'3B 89 80 01 53 50 4B 32 35 44 49 90 00 DA':{
		name:'SPK 2.5 D1'
	},
	'3B 89 80 01 80 67 04 12 B0 03 05 01 02 4C':{
		name:'Austrian Passport'
	},
	'3B 8A 00 91 01 00 16 00 01 16 01 00 96':{
		name:'GSM-SIM T-Mobil D1 (900MHz)'
	},
	'3B 8A 00 91 01 00 16 00 01 20 01 00 96':{
		name:'GSM-SIM T-D1 prepaid (Xtra)'
	},
	'3B 8A 00 91 01 00 16 00 01 20 02 00 96':{
		name:'GSM-SIM (900MHz) card of the carrier t-mobile for their cellular',
		info:'network (phase 2+ with 3V)'
	},
	'3B 8A 00 91 91 00 17 00 01 07 02 00 96':{
		name:'GSM-SIM T-Mobile Austria'
	},
	'3B 8A 00 91 91 00 17 00 01 07 03 00 96':{
		name:'T-Mobile prepaid 2G SIM'
	},
	'3B 8A 00 92 01 26 91 07 00 01 93 03 00':{
		name:'Kazakhstan driver licence'
	},
	'3B 8A 00 92 02 03 91 08 00 01 01 04 00':{
		name:'32K SIM Card from the austrian telecom "ONE"'
	},
	'3B 8A 01 4A 43 4F 50 34 31 56 32 32 31 FF':{
		name:'JCOP41'
	},
	'3B 8A 80 01 00 64 05 5C 02 03 31 80 90 00 16':{
		name:'T-System Contactless Netkey Card'
	},
	'3B 8A 80 01 00 64 05 76 02 03 31 80 90 00 3C':{
		name:'T-System Contactless TCOS Min'
	},
	'3B 8A 80 01 4A 43 4F 50 33 31 56 32 33 32 7A':{
		name:'Snapper New Zealand (JCOP)'
	},
	'3B 8A 80 01 4A 43 4F 50 34 31 56 32 32 31 7F':{
		name:'NXP JCOP 41 v2.2.1 72k RFID I/F'
	},
	'3B 8A 80 01 80 31 B8 73 84 01 E0 82 90 00 06':{
		name:'German ID Card - Personalausweis'
	},
	'3B 8A 80 01 80 31 F8 73 F7 41 E0 82 90 00 75':{
		name:'ePerso - German ID card'
	},
	'3B 8A 80 01 80 65 A2 01 01 01 3D 72 D6 43 97':{
		name:'Gemplus GemXpresso Pro R3 E32 PK (combi)'
	},
	'3B 8B 01 52 75 74 6F 6B 65 6E 20 44 53 20 C1':{
		name:'Rutoken ECP (DS)'
	},
	'3B 8B 01 52 75 74 6F 6B 65 6E 20 45 43 50 A0':{
		name:'Rutoken ECP'
	},
	'3B 8B 80 01 00 31 C0 64 B0 FC 10 00 00 90 00 53':{
		name:'Thai Passport 2010, 2011'
	},
	'3B 8B 80 01 00 64 04 11 01 01 31 80 00 90 00 5A':{
		name:'German Passport (issued Nov 2006)',
		info:'United Kingdom e-Passport'
	},
	'3B 8B 80 01 4E 58 50 2D 4E 46 43 20 32 00 00 38':{
		name:'TouchandTravel Touchpoint NFC-Card.',
		info:'Train-Station in Berlin. Use a NFC-compliant phone to check in for a ticket.'
	},
	'3B 8B 81 31 40 34 53 4D 41 52 54 53 43 4F 50 45 31 6D':{
		name:'Zeeland kaart (Telecommunication)'
	},
	'3B 8C 80 01 04 43 FD .. .. .. .. .. .. .. .. .. ..':{
		name:'RFID - NFC Forum tag type 3 (FeliCa)'
	},
	'3B 8C 80 01 50 01 BA 13 7E 00 00 00 00 B3 71 71 38':{
		name:'Mobib (Brussels public transportation card)'
	},
	'3B 8C 80 01 80 91 E1 65 D0 00 43 00 00 82 90 00 19':{
		name:'French passport (issued in late 2008)'
	},
	'3B 8C 80 01 80 91 E1 65 D0 00 46 00 00 82 90 00 1C':{
		name:'US passport'
	},
	'3B 8D 80 01 0D 78 80 84 02 00 73 C8 40 13 00 90 FF F8':{
		name:'Nokia 6212 phone seen as NFC device'
	},
	'3B 8D 80 01 73 66 74 65 2D 63 64 30 38 30 2D 6E 66 3F':{
		name:'G&D SmartCafe Expert 3.2 80K Dual'
	},
	'3B 8D 80 01 80 31 80 65 B0 07 02 02 89 83 00 90 00 75':{
		name:'JCOP30 contactless interface'
	},
	'3B 8E 80 01 0E 78 33 C4 02 00 64 04 15 01 02 00 90 FF 95':{
		name:'Spanish Passport'
	},
	'3B 8E 80 01 10 38 77 A7 80 91 E1 65 D0 00 42 00 00 82 72':{
		name:'Czech Republic e-Passport (issued Feb 2009)'
	},
	'3B 8E 80 01 13 78 80 80 02 46 49 4F 4D 4B 5F 30 30 31 4E':{
		name:'MasterCard/PayPass Card issued by Czech FIO Banka a.s. (contactless chip)',
		info:'note the ASCII string \'FIOK_001N\' embedded in ATR'
	},
	'3B 8E 80 01 52 46 49 44 49 4F 74 20 4A 43 4F 50 38 30 5A':{
		name:'RFIDIOt G&D SmartCafe 80K'
	},
	'3B 8E 80 01 80 31 80 66 40 90 89 12 08 02 83 01 90 00 0B':{
		name:'ISO 14443B Type T = CL Infineon Card'
	},
	'3B 8E 80 01 80 31 80 66 B0 84 0C 01 6E 01 83 00 90 00 1D':{
		name:'Barclaycard Platinum contact/contactless (wave)'
	},
	'3B 8E 80 01 80 31 80 66 B0 84 12 01 6E 01 83 00 90 00 03':{
		name:'Contactless Barclaycard Visa'
	},
	'3B 8E 80 01 80 91 91 31 C0 64 77 E3 03 00 83 82 90 00 1C':{
		name:'Belgian Passport',
		info:'Thai Passport 2005'
	},
	'3B 8E 80 01 80 91 E1 31 C0 64 77 E3 03 00 83 82 90 00 6C':{
		name:'Belgian Passport'
	},
	'3B 8F 01 80 25 A0 00 00 00 56 57 44 4B 34 30 30 06 00 B7':{
		name:'SafeNet IKey4000'
	},
	'3B 8F 80 01 00 31 B8 64 04 B0 EC C1 73 94 01 80 82 90 00 0E':{
		name:'Contactless CPS v3 Card (Carte de Professionnel de Santé)'
	},
	'3B 8F 80 01 52 46 49 44 49 4F 74 20 4A 43 4F 50 20 33 36 76':{
		name:'RFIDIOt JCOP 36K Blank (http://rfidiot.org)'
	},
	'3B 8F 80 01 52 46 49 44 49 4F 74 20 4A 43 4F 50 20 37 32 76':{
		name:'RFIDIOt JCOP 72K Blank (http://rfidiot.org)'
	},
	'3B 8F 80 01 52 46 49 44 49 4F 74 20 4A 43 4F 50 37 32 72 24':{
		name:'RFIDIOt JCOP 72K RANDOM_UID Blank (http://rfidiot.org)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 01 00 00 00 00 ..':{
		name:'Mifare Standard 1K (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 02 00 00 00 00 ..':{
		name:'Mifare Standard 4K (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 03 00 00 00 00 ..':{
		name:'Mifare Ultralight (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 04 00 00 00 00 ..':{
		name:'SLE55R_XXXX (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 06 00 00 00 00 ..':{
		name:'SR176 (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 07 00 00 00 00 ..':{
		name:'SRI X4K (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 08 00 00 00 00 ..':{
		name:'AT88RF020 (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 09 00 00 00 00 ..':{
		name:'AT88SC0204CRF (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 0A 00 00 00 00 ..':{
		name:'AT88SC0808CRF (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 0B 00 00 00 00 ..':{
		name:'AT88SC1616CRF (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 0C 00 00 00 00 ..':{
		name:'AT88SC3216CRF (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 0D 00 00 00 00 ..':{
		name:'AT88SC6416CRF (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 0E 00 00 00 00 ..':{
		name:'SRF55V10P (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 0F 00 00 00 00 ..':{
		name:'SRF55V02P (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 10 00 00 00 00 ..':{
		name:'SRF55V10S (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 11 00 00 00 00 ..':{
		name:'SRF55V02S (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 12 00 00 00 00 ..':{
		name:'TAG_IT (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 13 00 00 00 00 ..':{
		name:'LRI512 (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 14 00 00 00 00 ..':{
		name:'ICODESLI (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 15 00 00 00 00 ..':{
		name:'TEMPSENS (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 16 00 00 00 00 ..':{
		name:'I.CODE1 (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 17 00 00 00 00 ..':{
		name:'PicoPass 2K (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 18 00 00 00 00 ..':{
		name:'PicoPass 2KS (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 19 00 00 00 00 ..':{
		name:'PicoPass 16K (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 1A 00 00 00 00 ..':{
		name:'PicoPass 16Ks (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 1B 00 00 00 00 ..':{
		name:'PicoPass 16K(8x2) (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 1C 00 00 00 00 ..':{
		name:'PicoPass 16KS(8x2) (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 1D 00 00 00 00 ..':{
		name:'PicoPass 32KS(16+16) (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 1E 00 00 00 00 ..':{
		name:'PicoPass 32KS(16+8x2) (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 1F 00 00 00 00 ..':{
		name:'PicoPass 32KS(8x2+16) (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 20 00 00 00 00 ..':{
		name:'PicoPass 32KS(8x2+8x2) (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 21 00 00 00 00 ..':{
		name:'LRI64 (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 22 00 00 00 00 ..':{
		name:'I.CODE UID (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 23 00 00 00 00 ..':{
		name:'I.CODE EPC (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 24 00 00 00 00 ..':{
		name:'LRI12 (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 25 00 00 00 00 ..':{
		name:'LRI128 (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 26 00 00 00 00 ..':{
		name:'Mifare Mini (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 27 00 00 00 00 ..':{
		name:'my-d move (SLE 66R01P) (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 28 00 00 00 00 ..':{
		name:'my-d NFC (SLE 66RxxP) (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 29 00 00 00 00 ..':{
		name:'my-d proximity 2 (SLE 66RxxS) (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 2A 00 00 00 00 ..':{
		name:'my-d proximity enhanced (SLE 55RxxE) (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 2B 00 00 00 00 ..':{
		name:'my-d light (SRF 55V01P) (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 2C 00 00 00 00 ..':{
		name:'PJM Stack Tag (SRF 66V10ST) (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 2D 00 00 00 00 ..':{
		name:'PJM Item Tag (SRF 66V10IT) (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 2E 00 00 00 00 ..':{
		name:'PJM Light (SRF 66V01ST) (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 2F 00 00 00 00 ..':{
		name:'Jewel Tag (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 30 00 00 00 00 ..':{
		name:'Topaz NFC Tag (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 31 00 00 00 00 ..':{
		name:'AT88SC0104CRF (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 32 00 00 00 00 ..':{
		name:'AT88SC0404CRF (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 33 00 00 00 00 ..':{
		name:'AT88RF01C (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 34 00 00 00 00 ..':{
		name:'AT88RF04C (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 .. 00 35 00 00 00 00 ..':{
		name:'i-Code SL2 (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 00 00 00 00 00 00 00 68':{
		name:'NFC/RFID "Android Beam" mode on a Sony Xperia Ion'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 01 .. .. 00 00 00 00 ..':{
		name:'RFID - ISO 14443 Type A Part 1 (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 02 .. .. 00 00 00 00 ..':{
		name:'RFID - ISO 14443 Type A Part 2 (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 03 .. .. 00 00 00 00 ..':{
		name:'RFID - ISO 14443 Type A Part 3 (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 03 00 00 00 00 00 00 6B':{
		name:'buss/train pass for use with Skånetrafiken (www.skanetrafiken.se) busses and trains.',
		info:'public libary of Düsseldorf, http://www.duesseldorf.de/stadtbuechereien/	\
			specialized Mifare Ultralight card'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 03 00 01 00 00 00 00 6A':{
		name:'Philips MIFARE Standard (1 Kbytes EEPROM)',
		info:'http://www.nxp.com/#/pip/pip=[pfp=41863]|pp=[t=pfp,i=41863]	\
			RFID - ISO 14443 Type A - Transport for London Oyster	\
			ACOS5/1k Mirfare	\
			RFID - ISO 14443 Type A - NXP Mifare card with 1k EEPROM	\
			vivotech ViVOcard Contactless Test Card	\
			Bangkok BTS Sky SmartPass'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 03 00 02 00 00 00 00 69':{
		name:'RFID - ISO 14443 Type A - NXP Mifare card with 4k EEPROM',
		info:'Bangkok Airport Link	\
			Dutch ov-chipkaart (public transportation)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 03 00 03 00 00 00 00 68':{
		name:'RFID - ISO 14443 Type A - NXP Mifare Ultralight or UltralightC'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 03 00 FF 00 00 00 00 94':{
		name:'ACTV (Italy) prepaid transport ticket',
		info:'"NFC Tag" — Sony\'s "Smart Tags"'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 03 F0 04 00 00 00 00 9F':{
		name:'NFC FORUM TYPE 1 TAG',
		info:'www.inovision-group.com/topaz	\
			ISO/IEC 14443A - 96 Bytes read/write NFC/RFID IC mandated by NFC Forum as the Type 1 NFC Forum Tag Format.'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 03 F0 11 00 00 00 00 8A':{
		name:'Bangkok Metro (MRT)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 03 FF 40 00 00 00 00 D4':{
		name:'Nokia N9'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 03 FF 88 00 00 00 00 1C':{
		name:'Infineon Mifare SLE 66R35',
		info:'http://www.infineon.com/cms/en/product/channel.html?channel=ff80808112ab681d0112ab69686e01ee'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 05 .. .. 00 00 00 00 ..':{
		name:'RFID - ISO 14443 Type B Part 1 (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 06 .. .. 00 00 00 00 ..':{
		name:'RFID - ISO 14443 Type B Part 2 (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 07 .. .. 00 00 00 00 ..':{
		name:'RFID - ISO 14443 Type B Part 3 (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 09 .. .. 00 00 00 00 ..':{
		name:'RFID - ISO 15693 Part 1 (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 0A .. .. 00 00 00 00 ..':{
		name:'RFID - ISO 15693 Part 2 (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 0A 00 1C 00 00 00 00 7E':{
		name:'RFID - HID iCLASS 16K CL'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 0B .. .. 00 00 00 00 ..':{
		name:'RFID - ISO 15693 Part 3 (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 0B 00 00 00 00 00 00 63':{
		name:'RFID - ISO 15693 - EM Microelectronic-Marin SA'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 0B 00 0E 00 00 00 00 6D':{
		name:'RFID - ISO 15693 - Infineon'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 0B 00 12 00 00 00 00 71':{
		name:'RFID - ISO 15693 - Texas Instrument'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 0B 00 14 00 00 00 00 77':{
		name:'Philips ICode',
		info:'RFID - ISO 15693 - Philips Semiconductors'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 0C .. .. 00 00 00 00 ..':{
		name:'RFID - ISO 15693 Part 4 (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 0D .. .. 00 00 00 00 ..':{
		name:'Contact (7816-10) I2C (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 0E .. .. 00 00 00 00 ..':{
		name:'Contact (7816-10) Extended I2C (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 0F .. .. 00 00 00 00 ..':{
		name:'Contact (7816-10) 2WBP (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 4F 0C A0 00 00 03 06 10 .. .. 00 00 00 00 ..':{
		name:'Contact (7816-10) 3WBP (as per PCSC std part3)'
	},
	'3B 8F 80 01 80 5A 08 03 03 00 00 00 01 52 43 21 82 90 00 FF':{
		name:'Carte Mode Pass (Used in Clermont-Ferrand, France, to store personal',
		info:'information and T2C subscription. T2C is the public transport	\
			company of Clermont-Ferrand: http://www.t2c.fr/)'
	},
	'3B 8F 80 01 80 5A 08 03 03 00 00 00 01 D3 37 72 82 90 00 59':{
		name:'French Transport Card Pass\'bus (used in Metz, France)',
		info:'http://www.tcrm-metz.fr/'
	},
	'3B 8F 80 01 80 91 E1 31 80 65 B0 83 11 00 AC 83 00 90 00 B7':{
		name:'GemCombiXpresso R4 72K (contactless interface)'
	},
	'3B 8F 80 01 80 91 E1 31 80 65 B0 83 11 11 AC 83 00 90 00 A6':{
		name:'GEMALTO WM GX4 72 DHS TSA (contactless interface)'
	},
	'3B 90 16 01 87':{
		name:'BIFIT USB-Token iBank2key'
	},
	'3B 90 95 80 1F C3 59':{
		name:'Dai Nippon Printing Co., DNP Standard-J T3.1'
	},
	'3B 91 94 80 1F 03 23 BA':{
		name:'China black(COS) SIM, does not support clock stop'
	},
	'3B 95 .. 40 FF 62 01 01 .. ..':{
		name:'Schlumberger Cryptoflex e-gate'
	},
	'3B 95 15 40 .. 68 01 02 .. ..':{
		name:'Schlumberger CryptoFlex 8k v2'
	},
	'3B 95 15 40 FF 63 01 01 00 00':{
		name:'Cryptoflex 16K'
	},
	'3B 95 18 40 FF 62 01 02 01 04':{
		name:'Schlumberger Cryptoflex 32K e-gate'
	},
	'3B 95 18 40 FF 62 04 01 01 05':{
		name:'Schlumberger CryptoFlex 32Ko V1'
	},
	'3B 95 18 40 FF 64 02 01 01 02':{
		name:'Schlumberger CryptoFlex 32Ko'
	},
	'3B 95 94 40 FF 63 01 01 02 01':{
		name:'Schlumberger Cryptoflex 16Ko'
	},
	'3B 95 95 40 FF AE 01 01 02 03':{
		name:'Axalto Cyberflex Access 64K v2a SM 2.3'
	},
	'3B 95 95 40 FF AE 01 03 00 00':{
		name:'Axalto - Cyberflex 64K',
		info:'Gemalto TOP IM FIPS CY2 (product code HWP115291A)'
	},
	'3B 95 95 40 FF D0 00 1A 01 01':{
		name:'Cyberflex Access 64k (v3)'
	},
	'3B 95 95 40 FF D0 00 31 01 01':{
		name:'Cyberflex Access E-gate V3'
	},
	'3B 95 95 40 FF D0 00 54 01 3.':{
		name:'Portuguese identity card, http://www.cartaodecidadao.pt'
	},
	'3B 96 18 80 01 80 51 00 61 10 30 9F 00 61 10 30 9E':{
		name:'Atmel/Athena T0 PC/SC Compliance Test Card No. 1 (warm reset)'
	},
	'3B 97 11 C0 FF B1 FE 35 1F 83 A5 05 01 01 02 A3 01 5F':{
		name:'digital chronotachygraphe card: conducteur/driver, entreprise, contrôleur/controler et atelier/workshop, 2006-2010',
		info:'manufactured by Imprimerie Nationale, distributed by Chronoservices'
	},
	'3B 97 13 C0 FF B1 FE 35 1F 83 A5 05 01 01 02 A3 01 5D':{
		name:'digital chronotachygraphe card: conducteur/driver, entreprise, contrôleur/controler et atelier/workshop, 2005-2006',
		info:'manufactured by Imprimerie Nationale, distributed by Chronoservices'
	},
	'3B 97 95 C0 2A 31 FE 35 D0 00 48 01 05 A3 11 3C':{
		name:'digital chronotachygraphe card: conducteur/driver, entreprise, contrôleur/controler et atelier/workshop, 2010-2015',
		info:'manufactured by Imprimerie Nationale, distributed by Chronoservices'
	},
	'3B 98 13 40 0A A5 03 01 01 01 AD 13 11':{
		name:'Belgium Electronic ID card'
	},
	'3B 98 94 00 93 91 14 01 0A 06 06 06':{
		name:'Orange Spain 64k Sim card'
	},
	'3B 98 94 40 0A A5 03 01 01 01 AD 13 10':{
		name:'Belgium Electronic ID card'
	},
	'3B 98 94 80 1F C2 32 2E 31 30 31 14 01 40 28':{
		name:'CMCC operator UICC (Telecommunication)'
	},
	'3B 98 95 00 93 94 04 04 03 03 03 03':{
		name:'T-Mobile MVNO SIM card'
	},
	'3B 98 95 40 FF D0 00 48 01 01 AD 13 21':{
		name:'Belgian Eid virtual test card',
		info:'https://env.dev.eid.belgium.be/prepcard.php'
	},
	'3B 98 96 00 80 31 C0 72 F7 41 81 07':{
		name:'Activ Rutoken Magistra'
	},
	'3B 98 96 00 93 94 03 07 03 04 04 04':{
		name:'SIM card'
	},
	'3B 99 18 00 11 88 22 33 44 55 66 77 60':{
		name:'sysmocom sysmoSIM-GR1'
	},
	'3B 99 94 00 91 08 91 06 00 01 06 06 00':{
		name:'GSM-SIM Orange-UK (1800)'
	},
	'3B 99 94 00 91 99 93 12 00 01 16 02 00':{
		name:'ORGA test systems - GSM Phase 2+ Test SIM'
	},
	'3B 9A 94 00 91 01 00 17 00 01 23 10 00 96':{
		name:'GSM-SIM Victorvox D1 (900MHz)'
	},
	'3B 9A 94 00 91 01 00 17 00 01 23 11 00 96':{
		name:'GSM-SIM Card T-D1 (900MHz)'
	},
	'3B 9A 94 00 91 01 00 17 00 01 26 06 00 96':{
		name:'T D1 GSM card'
	},
	'3B 9A 94 00 92 02 75 93 11 00 01 02 02 ..':{
		name:'SuperSIM'
	},
	'3B 9A 96 00 92 01 36 93 17 00 02 04 03 00':{
		name:'GSM-SIM EMT "Simpel" (prepaid, Estonia)',
		info:'https://www.emt.ee/web/simpel'
	},
	'3B 9A 96 00 92 01 48 93 17 00 02 12 04 00':{
		name:'SIM Card Carrefour Mobile (Belgium)'
	},
	'3B 9A 96 00 92 01 66 93 17 00 02 12 04 00':{
		name:'GSM SIM Bite.lv prepaid "Toxic"; 2008'
	},
	'3B 9A 96 00 92 03 49 93 16 00 01 21 01 00':{
		name:'GSM-SIM card of the Austrian provider Yesss! (http://www.yesss.at)'
	},
	'3B 9A 96 C0 10 31 FE 5D 00 64 05 7B 01 02 31 80 90 00 76':{
		name:'German driver card for the digital tachographs (mandatory for trucks above 3.5 tons)',
		info:'runnig STARCOS 3.4 and prouced by Giesecke & Devrient GmbH	\
			http://www.gi-de.com/deu/de/products_and_solutions/products/tachograph_cards/Fahrtenschreiberkarten-5890.jsp'
	},
	'3B 9B 95 80 1F 47 80 31 A0 73 BE 21 00 53 27 11 02 4C':{
		name:'SIM TELE2 Sweden'
	},
	'3B 9B 95 80 1F 47 80 31 A0 73 BE 21 00 53 34 99 05 D0':{
		name:'GSM-SIM EMT "Diil", prepaid (Estonia)'
	},
	'3B 9C 13 11 81 64 72 65 61 6D 63 72 79 70 74 00 04 08':{
		name:'XPlusTV & INXCT Access Card-9 (FIRECrypt)'
	},
	'3B 9C 13 11 81 64 72 65 61 6D 63 72 79 70 74 90 05 99':{
		name:'FireCrypt, access card 9 (Pay TV)'
	},
	'3B 9D 11 40 23 00 68 10 11 4D 69 6F 43 4F 53 00 90 00':{
		name:'MioCOS 1.0'
	},
	'3B 9D 94 40 23 00 68 20 01 4D 69 6F 43 4F 53 00 90 00':{
		name:'Miotec (http://www.miotec.fi) smartcard running Miocos 2.0 on an Atmel AT90SC646'
	},
	'3B 9D 95 80 1F C3 80 31 E0 52 4B 54 62 11 03 73 FE 21 1B 8F':{
		name:'KT WiBro UICC (2.3 GHz mobile WiMAX in South Korea)'
	},
	'3B 9D 95 80 1F C3 80 31 E0 73 FE 21 1B 65 D0 00 57 02 62 30':{
		name:'Gemalto NFC enabled (acquired through the Simagine contest)'
	},
	'3B 9D 95 80 1F C3 80 63 AF 03 A0 73 1A 21 1B 83 0F 90 00 F4':{
		name:'Greece TIM GSM SIM'
	},
	'3B 9D 95 80 1F C3 80 73 1A 21 1B 63 AF 07 A7 83 0F 90 00 F7':{
		name:'GemXplore 3G'
	},
	'3B 9D 95 80 1F C7 80 73 1A 21 1B 63 AF 06 A6 83 0F 90 00 F3':{
		name:'Orange UK GSM/UMTS SIM'
	},
	'3B 9D 95 80 1F C7 80 73 1A 21 1B 63 AF 09 A9 83 0F 90 00 F3':{
		name:'Estonian GSM operator TELE2'
	},
	'3B 9E 94 80 1F 42 80 31 00 73 BE 21 10 66 54 59 53 04 4C 25 CF':{
		name:'MCI (Mobile Communication Company of Iran) SIM'
	},
	'3B 9E 94 80 1F C3 80 31 E0 73 FE 21 1B 66 D0 00 17 B4 00 00 A5':{
		name:'Vodafone Ireland SIM card'
	},
	'3B 9E 94 80 1F C7 80 31 E0 73 FE 21 1B 66 D0 00 6C 02 5F 00 33':{
		name:'Vivo Brasil SIM Card'
	},
	'3B 9E 94 80 1F C7 80 31 E0 73 FE 21 1B 66 D0 00 6C 06 34 00 5C':{
		name:'SIM card SFR 250 128ko'
	},
	'3B 9E 95 80 1F C3 80 31 A0 73 BE 21 13 67 29 02 01 04 04 CD 39':{
		name:'H3G (?) UMTS USIM card',
		info:'J+ SWIM WIB UMTS SIM Test card	\
			http://www.exceldata.es/microprocess/j%2Bswinwibusim.html'
	},
	'3B 9E 95 80 1F C3 80 31 E0 73 FE 21 1B 66 D0 00 29 F4 01 00 DB':{
		name:'Vodafone (UK) Pay As You Talk SIM'
	},
	'3B 9E 95 80 1F C3 80 31 E0 73 FE 21 1B 66 D0 00 49 00 00 00 4E':{
		name:'UK O2 Unlimited Prepay GSM/UMTS USIM'
	},
	'3B 9E 95 80 1F C7 80 31 E0 73 FE 21 1B 66 D0 00 07 00 1E 00 1A':{
		name:'H3G (Ireland, UK) UMTS USIM card'
	},
	'3B 9E 95 80 1F C7 80 31 E0 73 FE 21 1B 66 D0 00 26 1C 01 00 38':{
		name:'GSM-SIM Telefonica Movistar, contract (Spain)',
		info:'http://www.movistar.es/'
	},
	'3B 9E 95 80 1F C7 80 31 E0 73 FE 21 1B 66 D0 00 28 C4 00 00 EF':{
		name:'H3G (Italy) UMTS USIM card'
	},
	'3B 9E 95 80 1F C7 80 31 E0 73 FE 21 1B 66 D0 00 49 00 00 00 4A':{
		name:'Rogers 3G SIM card'
	},
	'3B 9E 95 80 1F C7 80 31 E0 73 FE 21 1B 66 D0 00 7A 00 00 00 79':{
		name:'Simyo SIM Card, Spanish Mobile Company',
		info:'Hi SIM'
	},
	'3B 9E 95 C0 0A 1F C6 80 31 E0 73 FE 21 1B 66 D0 01 83 0D 58 81 1E':{
		name:'Mobile Paypass G199 NFC'
	},
	'3B 9E 96 80 1F 83 80 31 E0 73 FE 21 12 66 55 57 4E 41 32 33 91':{
		name:'TDC mobile UICC (Telecommunication)'
	},
	'3B 9E 96 80 1F C7 80 31 E0 73 FE 21 1B 66 D0 00 28 24 01 00 0D':{
		name:'United Mobile SIM'
	},
	'3B 9E 96 80 1F C7 80 31 E0 73 FE 21 1B 66 D0 00 6C 0C 72 00 12':{
		name:'Orange Austria GSM/3G SIM: "Mobiles Internet"'
	},
	'3B 9E 96 80 1F C7 80 31 E0 73 FE 21 1B 66 D0 01 77 97 0D 00':{
		name:'SIM Free Mobile'
	},
	'3B 9E 96 80 1F C7 80 31 E0 73 FE 21 1B 66 D0 01 77 97 0D 00 EC':{
		name:'SIM Free Mobile'
	},
	'3B 9F .. 80 1F C3 00 68 1. 44 05 01 46 49 53 45 31 C8 .. 90 00 ..':{
		name:'Setec SetCOS 4.4.1'
	},
	'3B 9F 11 40 60 49 52 44 45 54 4F 20 41 43 53 20 56 35 2E 30':{
		name:'"La7 Cartapiù" for DVB-T decoders, IRDETO access'
	},
	'3B 9F 11 40 60 49 52 44 45 54 4F 20 41 43 53 20 56 35 2E 37':{
		name:'dahlia Tv Italian Provider'
	},
	'3B 9F 11 40 60 49 52 44 45 54 4F 20 41 43 53 20 56 36 2E 30':{
		name:'skylink, Pay TV, http://www.skylink.cz'
	},
	'3B 9F 11 80 1F C3 80 31 E0 73 FE 21 1B 64 07 53 63 01 82 90 00 74':{
		name:'Cingular SIM'
	},
	'3B 9F 11 C0 0A 1F C7 80 31 E0 73 FE 21 1B 63 F1 00 AD 83 0F 90 00 59':{
		name:'GemXplore Generation 3G'
	},
	'3B 9F 13 81 31 FE 45 80 67 55 45 4B 41 45 12 61 31 80 73 B3 A1 80 1C':{
		name:'UKiS 1.2.1 on YITAL chip'
	},
	'3B 9F 13 81 31 FE 45 80 67 55 45 4B 41 45 12 64 31 80 73 B3 A1 80 19':{
		name:'UKiS 1.2.1 on HNEC chip'
	},
	'3B 9F 13 81 31 FE 45 80 67 55 45 4B 41 45 12 65 31 80 73 B3 A1 80 18':{
		name:'UKiS 1.2.1 on SMIC chip'
	},
	'3B 9F 13 81 B1 80 37 1F 03 80 31 F8 69 4D 54 43 4F 53 70 02 01 02 81 07 86':{
		name:'Swiss Health Insurance Card'
	},
	'3B 9F 21 0E 49 52 44 45 54 4F 20 41 43 53 03 83 95 00 80 55':{
		name:'Nagravision Betacrypt'
	},
	'3B 9F 21 0E 49 52 44 45 54 4F 20 41 43 53 03 84 55 6D FF 80':{
		name:'Nagravision Betacrypt'
	},
	'3B 9F 21 0E 49 52 44 45 54 4F 20 41 43 53 03 84 55 FF 80 6D':{
		name:'TV smart card Sky Germany BEtacrypt 1702',
		info:'http://providers.wikidot.com/sky-deutschland'
	},
	'3B 9F 21 0E 49 52 44 45 54 4F 20 41 43 53 20 56 34 2E 31 9D':{
		name:'Foxtel paytv decoder in Australia acs 4.1 Irdeto2'
	},
	'3B 9F 21 0E 49 52 44 45 54 4F 20 41 43 53 20 56 35 2E 33 9E':{
		name:'red dragoncard chid 0604- Austar provider (pay tv)'
	},
	'3B 9F 21 0E 49 52 44 45 54 4F 20 41 43 53 20 56 35 2E 34 99':{
		name:'Nova Greece package on satellite 13E Hotbird'
	},
	'3B 9F 21 0E 49 52 44 45 54 4F 20 41 43 53 20 56 35 2E 37 9A':{
		name:'irdeto2 www.digiturk.com.tr (Pay TV)'
	},
	'3B 9F 94 40 1E 00 67 .. 43 46 49 53 45 10 52 66 FF 81 .. ..':{
		name:'SLE66CX160S running SETCOS 4.3.1 Revision A'
	},
	'3B 9F 94 40 1E 00 67 11 43 46 49 53 45 10 52 66 FF 81 90 00':{
		name:'Setec / FINEID',
		info:'SETEC Instant EID'
	},
	'3B 9F 94 40 1E 00 67 16 43 46 49 53 45 10 52 66 FF 81 90 00':{
		name:'RSA SecurID 3100 or Utimaco Safeware Smartcard',
		info:'SetCOS 4.3.1 Revision Unknown'
	},
	'3B 9F 94 80 1F C3 00 68 10 44 05 01 46 49 53 45 31 C8 07 90 00 18':{
		name:'SetCOS 4.3.0 32K RSA',
		info:'Instant EID IP2	\
			SETEC SetCard 32K PKI Evaluated SetCOS 4.4.1a2'
	},
	'3B 9F 94 80 1F C7 80 31 E0 73 FE 21 13 57 49 05 0C 86 98 60 18 CC':{
		name:'China Unicom USIM 128K 6131H'
	},
	'3B 9F 94 80 1F C7 80 31 E0 73 FE 21 1B 64 06 81 01 00 82 90 00 45':{
		name:'Mobicarte Orange'
	},
	'3B 9F 94 80 1F C7 80 31 E0 73 FE 21 1B 64 07 56 42 00 82 90 00 D0':{
		name:'SIM mobi orange'
	},
	'3B 9F 95 80 1F 43 80 31 E0 73 36 21 13 57 4A 33 0E 09 31 41 00 A9':{
		name:'GSM-SIM Elisa (Estonia, WPKI eID support)'
	},
	'3B 9F 95 80 1F 43 80 31 E0 73 36 21 13 57 4A 33 0E 0C 31 41 00 AC':{
		name:'Vodafone SIM (mobile phone)'
	},
	'3B 9F 95 80 1F 43 80 31 E0 73 36 21 13 57 4A 33 0E 10 31 41 00 B0':{
		name:'SIM card O2 (UK, Pay-As-You-Go)',
		info:'Tesco Mobile (UK) SIM'
	},
	'3B 9F 95 80 1F 43 80 31 E0 73 F6 21 13 57 4A 43 05 21 31 41 00 3A':{
		name:'GSM SIM AT&T US'
	},
	'3B 9F 95 80 1F 47 80 31 E0 73 36 21 13 57 4A 33 0E 11 31 41 00 B5':{
		name:'Telus 3G SIM Card'
	},
	'3B 9F 95 80 1F C3 80 31 A0 73 BE 21 13 67 47 01 03 01 02 00 00 99':{
		name:'T-Mobile (UK) SIM',
		info:'Fresh Mobile (UK) SIM'
	},
	'3B 9F 95 80 1F C3 80 31 A0 73 BE 21 13 67 47 01 05 01 04 00 00 99':{
		name:'T-Mobile Nederlands http://www.tmobile.nl'
	},
	'3B 9F 95 80 1F C3 80 31 A0 73 BE 21 13 67 D0 02 03 09 01 00 00 06':{
		name:'GSM, T-Mobile (Germany)'
	},
	'3B 9F 95 80 1F C3 80 31 A0 73 BE 21 13 67 D0 02 03 31 05 00 00 3A':{
		name:'T-MOBILE CZ GSM card'
	},
	'3B 9F 95 80 1F C3 80 31 E0 73 FE 21 1B 57 3F 86 60 46 CD 00 01 B4':{
		name:'China Unicom USIM 128K 1295E'
	},
	'3B 9F 95 80 1F C3 80 31 E0 73 FE 21 1B 63 E2 09 A9 83 0F 90 00 8D':{
		name:'GSM-SIM EMT (Estonia, WPKI eID support)'
	},
	'3B 9F 95 80 1F C3 80 31 E0 73 FE 21 1B 63 E2 0A D2 83 0F 90 00 F5':{
		name:'GSM, Vodafone (Germany)'
	},
	'3B 9F 95 80 1F C3 80 31 E0 73 FE 21 1B 64 06 90 61 00 82 90 00 31':{
		name:'3G SIM card from AT&T USA'
	},
	'3B 9F 95 80 1F C3 80 31 E0 73 FE 21 1B 64 06 90 62 00 82 90 00 32':{
		name:'AT&T GoPhone SIM Card'
	},
	'3B 9F 95 80 1F C3 80 31 E0 73 FE 21 1B 64 9B 4D 01 11 82 90 00 00':{
		name:'Singular (now AT&T) 3G GSM SIM Card'
	},
	'3B 9F 95 80 1F C3 80 31 E0 73 FE 21 1B B3 E2 01 74 83 0F 90 00 88':{
		name:'Gemplus GemXplore 3G USIM'
	},
	'3B 9F 95 80 1F C7 80 31 A0 73 BE 21 13 67 D0 02 04 09 01 00 00 05':{
		name:'T-Mobile SIM card issued in Germany 2012'
	},
	'3B 9F 95 80 1F C7 80 31 E0 73 FE 21 13 57 12 29 11 02 01 00 00 C2':{
		name:'sysmocom sysmoUSIM-GR1',
		info:'http://sysmocom.de/'
	},
	'3B 9F 95 80 1F C7 80 31 E0 73 FE 21 13 57 4A 33 0E 07 32 30 00 99':{
		name:'Bell Canada 3G SIM'
	},
	'3B 9F 95 80 1F C7 80 31 E0 73 FE 21 13 57 4A 33 0E 19 32 33 00 84':{
		name:'WIND Mobile SIM Card'
	},
	'3B 9F 95 80 1F C7 80 31 E0 73 FE 21 13 57 4A 33 0E 1A 32 36 00 82':{
		name:'TELUS 3G SIM Card'
	},
	'3B 9F 95 80 1F C7 80 31 E0 73 FE 21 13 63 55 10 AA 83 07 90 00 24':{
		name:'2degrees NFC (Telecommunication)',
		info:'http://www.2degreesmobile.co.nz/home'
	},
	'3B 9F 95 80 1F C7 80 31 E0 73 FE 21 13 67 94 03 11 00 00 02 03 5C':{
		name:'AT&T (US) GSM SIM'
	},
	'3B 9F 95 80 1F C7 80 31 E0 73 FE 21 1B 63 E2 03 94 83 0F 90 00 BE':{
		name:'Telenet N.V. Walk & Talk SIM Card Belgium'
	},
	'3B 9F 95 80 1F C7 80 31 E0 73 FE 21 1B 63 E2 04 A5 83 0F 90 00 88':{
		name:'Cingular "64Ksmartchip" GSM SIM',
		info:'Telia GSM/3G (Swedish operator)'
	},
	'3B 9F 95 80 1F C7 80 31 E0 73 FE 21 1B 63 E2 06 A6 83 0F 90 00 89':{
		name:'TracFone (US) Net10 GSM SIM card',
		info:'Simyo (Germany) GSM SIM card	\
			H3G (Italy) UMTS USIM card'
	},
	'3B 9F 95 80 1F C7 80 31 E0 73 FE 21 1B 63 E2 07 A7 83 0F 90 00 89':{
		name:'SIM NRJ Mobile',
		info:'H3G (UK) UMTS USIM card	\
			Orange UK GSM/UMTS SIM'
	},
	'3B 9F 95 80 1F C7 80 31 E0 73 FE 21 1B 63 E2 08 A8 83 0F 90 00 89':{
		name:'H3G (Sweden) UMTS USIM card'
	},
	'3B 9F 95 80 1F C7 80 31 E0 73 FE 21 1B 63 E2 09 A9 83 0F 90 00 89':{
		name:'GSM SIM Vodafone NL postpaid'
	},
	'3B 9F 95 80 1F C7 80 31 E0 73 FE 21 1B 65 9F 01 09 02 04 81 05 C4':{
		name:'2degrees mobile SIM card (from http://www.2degreesmobile.co.nz/)'
	},
	'3B 9F 95 81 31 FE 9F 00 65 46 53 05 .. 06 71 DF 00 00 00 .. .. .. ..':{
		name:'Feitian PKI (http://www.ftsafe.com/products/PKI-Card.html)',
		info:'FTCOS/PK-01C'
	},
	'3B 9F 95 81 31 FE 9F 00 65 46 53 05 30 06 71 DF 00 00 00 80 6A 82 5E':{
		name:'Feitian PKI (http://www.ftsafe.com/products/PKI-Card.html)'
	},
	'3B 9F 95 81 31 FE 9F 00 66 46 53 05 01 00 11 71 DF 00 00 .. .. .. ..':{
		name:'Feitian ePass2003 token'
	},
	'3B 9F 95 C0 0A 1F C7 80 31 E0 73 FE 21 1B 63 F1 00 AD 83 0F 90 00 DD':{
		name:'Telenor SIM card (Norway)'
	},
	'3B 9F 96 40 0A 80 31 E0 6B 04 20 05 02 58 55 55 55 55 55 55':{
		name:'BuyPass identification card. It can also possibly be used to hold e-currency.'
	},
	'3B 9F 96 40 0A 80 31 E0 6B 04 21 05 02 61 55 55 55 55 55 55':{
		name:'altinn - Buypass',
		info:'Electronic ID card for login to the altinn.no service'
	},
	'3B 9F 96 80 1F 43 80 31 E0 73 36 21 13 57 4A 33 0E 09 31 41 00 AA':{
		name:'Elisa UICC (Telecommunication)'
	},
	'3B 9F 96 80 1F 43 80 31 E0 73 36 21 13 57 4A 33 0E 0C 31 41 00 AF':{
		name:'GSM, Vodafone (Germany)'
	},
	'3B 9F 96 80 1F 47 80 31 E0 73 36 21 13 57 4A 33 0E 0C 31 41 00 AB':{
		name:'NATEL SIM-Card swisscom'
	},
	'3B 9F 96 80 1F C3 00 68 10 44 05 01 46 49 53 45 31 C8 07 90 00 1A':{
		name:'SETEC SetCard 32K PKI Evaluated SetCOS 4.4.1'
	},
	'3B 9F 96 80 1F C3 80 31 E0 73 FE 21 1B B3 E2 02 7E 83 0F 90 00 82':{
		name:'Vodafone SIM Card (D2, 1800Mhz, Germany, Twincard, possibly others too?), manufactured by Gemplus (See stamp on the chip)',
		info:'MobileOne (Singaporean 3G/GSM operator) SIM card "II(3G-64) M1 3G "'
	},
	'3B 9F 96 80 1F C7 80 31 E0 73 FE 21 .. 63 .. .. .. 83 0. 90 00 ..':{
		name:'TIM (Italy) 128KB GSM SIM',
		info:'H3G (Italy) UMTS USIM	\
			Vodafone (UK) SIM'
	},
	'3B 9F 96 80 1F C7 80 31 E0 73 FE 21 13 67 91 18 02 04 06 06 06 51':{
		name:'USIM (3G PF) Orange'
	},
	'3B 9F 96 80 1F C7 80 31 E0 73 FE 21 13 67 94 03 07 03 04 04 04 4F':{
		name:'GSM-SIM EMT (3G modem 2011, Estonia)'
	},
	'3B 9F 96 80 1F C7 80 31 E0 73 FE 21 13 67 94 04 01 07 02 02 02 4C':{
		name:'Orange Mobicarte (France)'
	},
	'3B 9F 96 80 1F C7 80 31 E0 73 FE 21 13 67 94 04 04 03 05 05 05 4A':{
		name:'Claro operator SIM'
	},
	'3B 9F 96 80 1F C7 80 31 E0 73 FE 21 1B 63 E2 03 94 83 0F 90 00 BD':{
		name:'USIM (3G DF) Orange'
	},
	'3B 9F 96 80 1F C7 80 31 E0 73 FE 21 1B 64 07 14 81 00 82 90 00 53':{
		name:'SFR operator 3G'
	},
	'3B 9F 96 80 1F C7 80 31 E0 73 FE 21 1B 64 07 54 61 00 82 90 00 F3':{
		name:'Aero2 (Poland) - A 900Mhz HSPA+ and 2500Mhz LTE wholesale telecom operator',
		info:'USIM providing toll-free access to the Internet ("Bezpłatny Dostęp do Internetu" service)	\
			http://aero2.pl/bdi.html'
	},
	'3B 9F 96 80 1F C7 80 31 E0 73 FE 21 1B 64 40 41 12 00 82 90 00 D2':{
		name:'Free Mobile SIM Card'
	},
	'3B 9F 96 80 1F C7 80 31 E0 73 FE 21 1B B3 E2 03 94 83 0F 90 00 6D':{
		name:'GemXplore 3G v2.2'
	},
	'3B 9F 96 80 3F C3 A0 80 31 E0 73 F6 21 13 57 4A 4D 0E 1D 31 30 00 71':{
		name:'Telenor SIM card (Norway)'
	},
	'3B 9F 96 81 31 FE 45 80 67 55 45 4B 41 45 12 12 31 80 73 B3 A1 80 EA':{
		name:'AKiS v1.2 on nxp chip'
	},
	'3B 9F 96 81 31 FE 45 80 67 55 45 4B 41 45 12 52 31 80 73 B3 A1 80 AA':{
		name:'AKiS v1.2.1 on infineon chip'
	},
	'3B 9F 96 81 31 FE 45 80 67 55 45 4B 41 45 12 53 31 80 73 B3 A1 80 AB':{
		name:'AKiS v1.2.1 on nxp chip'
	},
	'3B 9F 96 81 31 FE 45 80 67 55 45 4B 41 45 12 92 31 80 73 B3 A1 80 6A':{
		name:'AKiS v1.2.2 on infineon chip'
	},
	'3B 9F 96 81 31 FE 45 80 67 55 45 4B 41 45 12 93 31 80 73 B3 A1 80 6B':{
		name:'AKiS v1.3 on infineon chip'
	},
	'3B 9F 96 81 B1 FE 45 1F 07 00 64 05 1E B2 00 31 B0 73 96 21 DB 05 90 00 5C':{
		name:'SignTrust (www.signtrust.de)',
		info:'Infinion SLE66CX680PE with Starcos 3.2	\
			http://www.deutschepost.de/dpag?xmlFile=link1015459_49595'
	},
	'3B 9F 96 C0 0A 1F C3 80 31 E0 73 FE 21 1B 63 F1 00 AD 83 0F 90 00 DA':{
		name:'SIM SFR Pro (French Mobile Operator)'
	},
	'3B 9F 96 C0 0A 1F C7 80 31 E0 73 FE 21 1B 63 F1 00 AD 83 0F 90 00 DE':{
		name:'H3G (Italy) UMTS USIM card'
	},
	'3B 9F 96 C0 0A 1F C7 80 31 E0 73 FE 21 1B 65 D0 01 8E 0E 32 81 00 7A':{
		name:'Rogers 3G SIM card'
	},
	'3B 9F 97 C0 0A 1F C7 80 31 E0 73 FE 21 1B 65 D0 01 10 09 22 81 00 F2':{
		name:'"ultra fast card, max speed supported for telecom"? (transport)'
	},
	'3B 9F 97 C0 FF 1F C7 80 31 E0 73 FE 21 1B 63 F1 00 AD 83 0F 90 00 2A':{
		name:'Gemalto Speed Enhancement 97 (Telecommunication)'
	},
	'3B 9F D6 80 B1 A0 59 1F C7 53 4C 45 38 38 5F 50 53 4C 5F 56 30 2E 35 30 01':{
		name:'Infineon SLE88CFX4000P'
	},
	'3B A7 00 40 .. 80 65 A2 08 .. .. ..':{
		name:'Gemplus GemSAFE Smart Card (8K)'
	},
	'3B A7 00 40 14 80 65 A2 14 01 01 37':{
		name:'Gemplus GPK4000sdo'
	},
	'3B A7 00 40 18 80 65 A2 08 01 01 52':{
		name:'Gemplus GPK8000',
		info:'GemSAFE Smart Card (8K)'
	},
	'3B A7 00 40 18 80 65 A2 09 01 01 52':{
		name:'Gemplus GPK16000'
	},
	'3B A7 00 40 18 80 65 A2 09 01 02 52':{
		name:'Gemplus GPK16000'
	},
	'3B A7 00 40 18 80 65 A2 09 01 03 52':{
		name:'Gemplus GemSAFE std (GPK16000?)'
	},
	'3B A8 00 81 71 46 5D 00 54 43 4F 53 31 2E 32 00 65':{
		name:'Telesec TCOS 1.2'
	},
	'3B A8 00 81 71 46 5D 00 54 43 4F 53 31 2E 32 4B 2E':{
		name:'CeloCom Card with TCOS 1.2'
	},
	'3B AA 00 40 14 47 47 32 47 54 35 53 34 38 30':{
		name:'GSM-SIM Libertel (900MHz)'
	},
	'3B AA 00 40 80 53 4F 80 53 45 03 04 11 AA A3':{
		name:'"open platform" ATMEGA "new Generation"',
		info:'http://www.masterixweb-italy.com/new/images/articoli/atmega.jpg'
	},
	'3B AB 00 81 31 40 45 80 31 C0 65 08 06 80 00 00 00 00 84':{
		name:'Reloadable Visa Cash card (Schlumberger), Bank of America'
	},
	'3B AC 00 40 2A 00 12 25 00 64 80 00 03 10 00 90 00':{
		name:'Sesam Vitale card CPS (Carte Profesionnel de Santé)'
	},
	'3B AC 00 40 2A 00 12 25 00 64 80 82 02 12 00 90 00':{
		name:'Sesam Vitale card CPS (Carte Profesionnel de Santé)'
	},
	'3B AD 00 40 FF 80 31 80 65 B0 05 01 01 5E 83 00 90 00':{
		name:'Dallas Semiconductor iButton',
		info:'JIB	\
			Gemplus GemXpresso 2.11PK'
	},
	'3B B0 11 00 81 31 90 73 F2':{
		name:'SamOS 2.7'
	},
	'3B B2 11 00 10 80 00 01':{
		name:'Atmel memory card AT88SC0104C',
		info:'http://www.atmel.com/dyn/resources/prod_documents/doc5210.pdf	\
			Plug\'n\'Print'
	},
	'3B B2 11 00 10 80 00 02':{
		name:'Atmel memory card AT88SC0204C (Atmel memory card)',
		info:'http://www.atmel.com/dyn/resources/prod_documents/doc5211.pdf'
	},
	'3B B2 11 00 10 80 00 04':{
		name:'Atmel memory card AT88SC0404C',
		info:'http://www.atmel.com/dyn/resources/prod_documents/doc5210.pdf'
	},
	'3B B2 11 00 10 80 00 08':{
		name:'Atmel memory card AT88SC0808C',
		info:'http://www.atmel.com/dyn/resources/prod_documents/doc5210.pdf	\
			Smart VR Card - GD Burti'
	},
	'3B B2 11 00 10 80 00 16':{
		name:'Atmel memory card AT88SC1616C',
		info:'http://www.atmel.com/dyn/resources/prod_documents/doc5210.pdf'
	},
	'3B B3 11 00 00 00 00 32':{
		name:'Atmel memory card AT88SC3216C',
		info:'http://www.atmel.com/dyn/resources/prod_documents/doc5210.pdf'
	},
	'3B B3 11 00 00 00 00 64':{
		name:'Atmel memory card AT88SC6416C',
		info:'http://www.atmel.com/dyn/resources/prod_documents/doc5210.pdf'
	},
	'3B B3 11 00 00 00 01 28':{
		name:'Atmel memory card AT88SC12816C',
		info:'http://www.atmel.com/dyn/resources/prod_documents/doc5210.pdf'
	},
	'3B B3 11 00 00 00 02 56':{
		name:'Atmel memory card AT88SC25616C',
		info:'http://www.atmel.com/dyn/resources/prod_documents/doc5210.pdf'
	},
	'3B B7 11 00 81 31 90 43 A5 .. .. .. .. .. .. ..':{
		name:'Siemens CardOS/M V1.4 (SLE44C80S)'
	},
	'3B B7 11 00 81 31 90 53 B5 .. .. .. .. .. .. ..':{
		name:'CardOS EM/V1.4 (SLE44CR80S)'
	},
	'3B B7 18 00 81 31 FE 65 53 50 4B 32 34 90 00 5A':{
		name:'Giesecke & Devrient Starcos 2.4'
	},
	'3B B7 18 00 C0 3E 31 FE 65 53 50 4B 32 34 90 00 25':{
		name:'G&D STARCOS SPK 2.4'
	},
	'3B B7 94 00 81 31 FE 55 53 50 4B 32 32 90 00 E0':{
		name:'Dresdner Bank (a German Bank) Key-Card for InternetBanking'
	},
	'3B B7 94 00 81 31 FE 65 53 50 4B 32 32 90 00 D0':{
		name:'Giesecke & Devrient STARCOS SPK2.2'
	},
	'3B B7 94 00 81 31 FE 65 53 50 4B 32 33 90 00 D1':{
		name:'Giesecke & Devrient Starcos 2.3',
		info:'Deutsche Bank WebSign (RSA-Card)	\
			G&D StarSign Token'
	},
	'3B B8 13 00 81 31 20 5D 00 57 69 6E 43 61 72 64 02':{
		name:'SmartCard for Windows 1.1'
	},
	'3B B9 18 00 81 31 FE 9E 80 73 FF 61 40 83 00 00 00 DF':{
		name:'Serbian Identity Card',
		info:'This is the new Serbian biometric identity card (every adult cityzen	\
			must have). The chip contains owners picture, name, date and place	\
			of birth, current address, unique ID number and fingerprint.'
	},
	'3B B9 94 00 40 14 47 47 33 4E 48 38 36 34 30':{
		name:'GSM-SIM card of the Austrian mobile phone provider One, http://www.one.at',
		info:'Proximus SIM - Belgium (SetCOS?)'
	},
	'3B BA 11 00 81 31 FE 4D 55 45 4B 41 45 20 56 31 2E 30 AE':{
		name:'AKİS v1.0 on infineon chip'
	},
	'3B BA 13 00 81 31 86 5D 00 64 05 0A 02 01 31 80 90 00 8B':{
		name:'Telesec TCOS 2 (SLE44)',
		info:'TCOS 2.0 (on CR80S)	\
			Cryptokarte with RSA-Controller, T=1 Protocol'
	},
	'3B BA 14 00 81 31 86 5D 00 64 05 14 02 02 31 80 90 00 91':{
		name:'TCOS 2.0 (on CX160S)',
		info:'Telesec TCOS 2 (SLE66)'
	},
	'3B BA 94 00 40 14':{
		name:'GG3RS732S0 ?'
	},
	'3B BA 94 00 40 14 47 47 33 52 53 37 31 36 53 20':{
		name:'GSM SIM Elisa Estonia'
	},
	'3B BA 94 00 40 14 47 47 33 52 53 37 31 36 53 30':{
		name:'GSM-SIM Viag Interkom E2 Loop (1800MHz)',
		info:'GSM-SIM card of the Austrian A1, http://www.a1.net/privat/home	\
			GSM SIM Radiolinja Estonia; 2005'
	},
	'3B BA 95 00 81 B1 86 5D 1F 43 00 64 04 5C 02 03 31 80 90 00 84':{
		name:'T-Mobile Corporate ID Card'
	},
	'3B BA 96 00 81 31 86 5D 00 64 05 60 02 03 31 80 90 00 66':{
		name:'Telesec TCOS 2 (SLE66P)',
		info:'TCOS 2.0 (on CX320P)	\
			TeleSec Netkey Card'
	},
	'3B BA 96 00 81 31 86 5D 00 64 05 60 02 03 31 80 90 00 66 70 01 04 05 30 C9':{
		name:'TeleSec Netkey E4 Card'
	},
	'3B BA 96 00 81 31 86 5D 00 64 05 7B 02 03 31 80 90 00 7D':{
		name:'TeleSec NetKey Card',
		info:'Deutsche Post card (tcos)'
	},
	'3B BB 18 00 C0 10 31 FE 45 80 67 04 12 B0 03 03 00 00 81 01 38':{
		name:'Giesecke & Devrient Star Sign Card, STARCOS 3.0 DI, 72 KB, RSA2048 bit',
		info:'Giesecke & Devrient Smartc@fe Expert 32K v2.0'
	},
	'3B BB 18 00 C0 10 31 FE 45 80 67 04 12 B0 03 03 00 00 81 05 3C':{
		name:'Philips Smart MX',
		info:'Szczecin University of Technology in Poland student identity card (Elektroniczna Legitymacja Studencka = student identity card)	\
			CSOB bank, Czech Republic'
	},
	'3B BB 18 00 C0 3E 31 FE 65 47 26 44 20 54 53 4D 20 31 2E 30 B7':{
		name:'Italian Tachograph Driver Card'
	},
	'3B BC 18 00 81 31 20 75 5A 43 33 2E 31 32 20 52 45 56 20 41 46':{
		name:'ZeitControl BasicCard Enhanced 3.7, http://www.basiccard.com/'
	},
	'3B BC 94 00 40 14 47 47 33 48 33 35 58 53 32 30 30 30':{
		name:'GSM-SIM Era-PL',
		info:'T-Mobile GSM SIM Card'
	},
	'3B BC 94 00 40 14 47 47 33 48 33 35 58 56 32 30 30 30':{
		name:'GSM SIM CARD 32K, Vodafone'
	},
	'3B BC 94 00 40 14 47 47 33 49 35 39 42 43 32 30 30 30':{
		name:'GSM SIM Vodafona NL prepaid'
	},
	'3B BC 94 00 40 14 47 47 33 49 35 43 41 43 31 30 30 30':{
		name:'Siemens SIM card'
	},
	'3B BC 94 00 40 14 47 47 33 49 37 31 39 43 32 30 30 20':{
		name:'Telenor SIM card (Norway)'
	},
	'3B BC 94 00 40 14 47 47 33 49 42 31 42 43 31 30 30 20':{
		name:'Telenor SIM (Telecommunication)'
	},
	'3B BC 94 00 40 14 47 47 33 53 30 35 31 53 31 30 31 30':{
		name:'GSM SIM (Tele2, Estonia)',
		info:'GSM SIM Elisa Estonia; 2007	\
			GSM SIM from \'fonic\' Germany'
	},
	'3B BD 18 00 81 31 FE 45 80 51 02 67 04 14 B1 01 01 02 00 81 05 3D':{
		name:'Austrian "e-Card" (=Health Card)',
		info:'special Version of Starcos 3.1'
	},
	'3B BD 18 00 81 31 FE 45 80 51 02 67 05 18 B1 02 02 02 01 81 05 31':{
		name:'Austrian health insurance card "e-card"'
	},
	'3B BD 18 00 81 31 FE 45 80 51 03 67 04 14 B1 01 01 02 00 81 05 3C':{
		name:'Austrian Health insurance card "eCard" (HealthCare)',
		info:'http://www.chipkarte.at'
	},
	'3B BE 11 00 00 41 01 10 20 38 00 00 00 00 00 00 00 00 00':{
		name:'ACOS2'
	},
	'3B BE 11 00 00 41 01 38 00 00 00 00 00 00 00 00 01 90 00':{
		name:'ACS (Advanced Card System) ACOS-1'
	},
	'3B BE 11 00 00 41 01 38 00 00 00 00 00 00 00 00 02 90 00':{
		name:'ACS (Advanced Card System) ACOS-1 8K'
	},
	'3B BE 11 00 00 41 01 38 00 00 04 00 62 75 62 7A 01 90 00':{
		name:'Advanced Card Systems ACOS3 (24k) V1.7',
		info:'http://www.acs.com.hk/index.php?pid=product&prod_sections=0&id=ACOS3'
	},
	'3B BE 11 00 00 41 01 38 00 00 05 00 00 00 00 00 02 90 00':{
		name:'ACS (Advanced Card System) ACOS2'
	},
	'3B BE 11 00 00 41 01 38 01 00 03 00 00 00 00 00 02 90 00':{
		name:'ACOS2 test card from ACS reading off a ACR38U'
	},
	'3B BE 11 00 00 41 01 38 4D 80 0A 80 50 52 4F 56 00 90 00':{
		name:'ACS (Advanced Card System) ACOS-3'
	},
	'3B BE 18 00 00 41 05 .. 00 00 00 00 00 00 00 00 00 90 00':{
		name:'Advanced Card Systems (ACS) ACOS5 Cryptographic Smart Card'
	},
	'3B BE 18 00 00 41 05 10 00 00 00 00 00 00 00 00 00 90 00':{
		name:'ACS ACOS5 "ACOS5-32-G" http://www.acs.com.hk/acos5.asp',
		info:'dual card'
	},
	'3B BE 94 00 40 14 47 47 33 53 33 45 48 41 54 4C 39 31 30 00':{
		name:'Latvian GSM operator TELE2'
	},
	'3B BE 95 00 00 41 03 00 00 00 00 00 00 00 00 00 02 90 00':{
		name:'touchatag SAM card',
		info:'Spanish University of Murcia smart ID card - Old version with CajaMurcia Banking card integrated (Maestro card) (M.Mar OS) - Also used by many others spanish universities'
	},
	'3B BE 96 00 00 41 03 00 00 00 00 00 00 00 00 00 02 90 00':{
		name:'SAM inside the Tikitag reader from Alcatel-Lucent',
		info:'http://hackerati.com/post/57314994/rfid-on-the-cheap-hacking-tikitag'
	},
	'3B BE 96 00 00 41 05 20 00 00 00 00 00 00 00 00 00 90 00':{
		name:'CryptoMate64 USB Cryptographic token',
		info:'http://www.acs.com.hk/index.php?pid=product&prod_sections=0&id=CRYPTOMATE64'
	},
	'3B BE 96 00 80 1F C7 80 31 E0 73 FE 21 13 62 00 .. 83 81 90 00 ..':{
		name:'Vodafone (Italy) 128 kB GSM SIM card',
		info:'TIM (Italy) 128 kB GSM SIM card'
	},
	'3B BF .. 00 81 31 FE 5D 00 64 04 0F 03 .. 31 C0 73 F7 01 D0 00 90 00 ..':{
		name:'TCOS 3.0 on Philips P5CD036'
	},
	'3B BF .. 00 81 31 FE 5D 00 64 04 11 03 .. 31 C0 73 F7 01 D0 00 90 00 ..':{
		name:'TCOS 3.0 on Philips P5CT072'
	},
	'3B BF .. 00 81 31 FE 5D 00 64 04 15 03 .. 31 C0 73 F7 01 D0 00 90 00 ..':{
		name:'TCOS 3.0 on Philips P5CD072'
	},
	'3B BF .. 00 81 31 FE 5D 00 64 04 28 03 02 31 C0 73 F7 01 D0 00 90 00 ..':{
		name:'TCOS 3.0 release 2 on Philips P5CD080'
	},
	'3B BF .. 00 81 31 FE 5D 00 64 05 6D 03 .. 31 C0 73 F7 01 D0 00 90 00 ..':{
		name:'TCOS 3.0 on Infineon SLE 66CX642P'
	},
	'3B BF .. 00 81 31 FE 5D 00 64 05 89 03 .. 31 C0 73 F7 01 D0 00 90 00 ..':{
		name:'TCOS 3.0 on Infineon SLE 66CLX641P'
	},
	'3B BF .. 00 81 31 FE 5D 00 64 05 8A 03 .. 31 C0 73 F7 01 D0 00 90 00 ..':{
		name:'TCOS 3.0 on Infineon SLE 66CLX640P'
	},
	'3B BF .. 00 81 31 FE 5D 00 64 05 91 03 .. 31 C0 73 F7 01 D0 00 90 00 ..':{
		name:'TCOS 3.0 on Infineon SLE 66CX680PE'
	},
	'3B BF 11 00 81 31 .. 45 45 50 41 00 00 00 00 .. .. .. .. 00 00 .. .. ..':{
		name:'Austrian Quick E-purse',
		info:'http://www.quick.at/'
	},
	'3B BF 11 00 81 31 FE 45 45 50 41 00 00 00 00 00 00 00 00 00 00 00 00 F1':{
		name:'a.sign premium signature card'
	},
	'3B BF 11 00 81 31 FE 45 4D 43 41 00 00 01 00 01 69 71 85 00 00 00 00 77':{
		name:'Austrian "easybank" branded Mastercard, issued 2007'
	},
	'3B BF 11 00 81 31 FE 45 4D 43 41 00 00 01 00 02 08 20 51 00 00 00 00 90':{
		name:'austrian combined card of a mastercard and ÖBB Vorteilscard (Austrian Federal Railways)',
		info:'http://www.oebb.at/pv/de/Servicebox/VORTEILScard/Bezahlen_mit_der_VORTEILScard/VORTEILScard_MasterCard.jsp'
	},
	'3B BF 11 00 81 31 FE 45 4D 43 41 00 00 01 00 02 55 91 33 00 00 00 00 1E':{
		name:'Mastercard (Paylife Austria)'
	},
	'3B BF 11 00 C0 10 31 FE 44 53 4D 40 52 54 20 43 41 46 45 20 31 2E 31 43 C1':{
		name:'Giesecke&Devrient SmartCafe 1.1'
	},
	'3B BF 18 00 80 31 70 35 53 54 41 52 43 4F 53 20 53 32 31 20 43 90 00 9B':{
		name:'Giesecke & Devrient STARCOS S2.1'
	},
	'3B BF 18 00 81 31 70 55 53 54 41 52 43 4F 53 20 53 32 31 20 43 90 00 FA':{
		name:'Giesecke & Devrient STARCOS S2.1'
	},
	'3B BF 18 00 C0 20 31 70 52 53 54 41 52 43 4F 53 20 53 32 31 20 43 90 00 9C':{
		name:'Giesecke & Devrient SPK 2.1 C'
	},
	'3B BF 94 00 81 31 FE 65 45 4C 55 20 41 75 73 74 72 69 61 20 31 2E 32 38':{
		name:'A-Trust: trust-sign (Old Version, ca. 2002) for Digital Signature etc.',
		info:'A-Trust: a-sign-premium (ca. 2004) "Bürgerkarte" ("Citizen-Card")	\
			for Identifikation, Digital Signature etc.	\
			("should be" Starcos 2.3)'
	},
	'3B BF 94 00 81 31 FE 65 45 4C 55 20 41 75 73 74 72 69 61 20 31 2E 32 38':{
	},
	'3B BF 96 00 81 31 FE 5D 00 64 .. .. .. .. 31 C0 73 F7 01 D0 00 90 00 ..':{
		name:'TCOS 3.0 / NetKey 3.0'
	},
	'3B D0 A8 FF 81 F1 FB 24 00 1F C3 F4':{
		name:'Philips DESFire SAM'
	},
	'3B D2 18 00 81 31 FE 58 C9 01 14':{
		name:'Atos CardOS5 (PKI)',
		info:'http://atos.net/NR/rdonlyres/17C7BDD0-225B-4A58-B9A4-438EA3F3238A/0/74743_20120830_160149_cardos_v5_0__datenblatt_en.pdf'
	},
	'3B D2 18 02 C1 0A 31 FE 58 C8 0D 51':{
		name:'Siemens Card CardOS M4.4'
	},
	'3B D5 18 00 81 31 3A 7D 80 73 C8 21 10 30':{
		name:'Aladdin eToken NG-Flash with 256MB of flash memory',
		info:'Aladdin eToken PRO (72KB)	\
			http://www.aladdin.com/etoken/devices/default.aspx'
	},
	'3B D5 18 00 81 31 FE 7D 80 73 C8 21 10 F4':{
		name:'Bank of Lithuania Identification card',
		info:'Aladdin PRO/Java card http://www.aladdin-rd.ru/catalog/etoken/java/'
	},
	'3B D5 18 FF 80 91 FE 1F C3 80 73 C8 21 13 08':{
		name:'Athena IDProtect (JavaCard 2.2.2)',
		info:'http://www.athena-scs.com/product.asp?pid=32'
	},
	'3B D5 18 FF 81 91 FE 1F C3 80 73 C8 21 13 09':{
		name:'Athena IDProtect Key (v2)',
		info:'http://www.athena-scs.com/product.asp?pid=33'
	},
	'3B D5 95 04 00 AE 01 02 01 01':{
		name:'Axalto Cyberflex Access 64K v2b SM 1.1'
	},
	'3B D5 95 FF 80 91 FE 1F C3 80 73 C8 21 13 85':{
		name:'Athena IDProtect - Cryptographic Java Card',
		info:'http://www.athena-scs.com/product.asp?pid=32'
	},
	'3B D6 18 00 80 B1 80 6D 1F 03 80 51 00 61 10 30 9E':{
		name:'Atmel/Athena T0 PC/SC Compliance Test Card No. 1'
	},
	'3B D6 18 00 81 B1 80 7D 1F 03 80 51 00 61 10 30 8F':{
		name:'ASECard Crypto, http://www.athena-scs.com/product.asp?pid=8'
	},
	'3B D8 96 FF 81 31 FE 45 80 64 04 1B B4 2A 81 05 5B':{
		name:'Swiss LAMal health insurance card'
	},
	'3B D9 18 00 C0 09 10 FE 54 59 46 4F 4E 45 00 00 00':{
		name:'Tyfone\'s SideTap Card (NFC payments)'
	},
	'3B D9 94 00 00 4D 4D 41 52 33 31 34 90 00':{
		name:'Vodafone Spain 64kb SIM card. GSM/3G networks'
	},
	'3B DA 18 FF 81 B1 FE 75 1F 03 00 31 C5 73 C0 01 40 00 90 00 0C':{
		name:'GnuPG card V2'
	},
	'3B DA 94 00 00 4D 4D 41 52 4A 2B 33 39 90 00':{
		name:'SIM card from Vodafone Spain'
	},
	'3B DB 11 FF 50 00 FF 00 00 00 00 00 00 00 07 92 16 03':{
		name:'NEC V-WAY64 v2.1'
	},
	'3B DB 18 00 80 1F 03 00 31 C0 64 77 E3 03 00 82 90 00 4F':{
		name:'Oberthur ID-One Cosmo 64K V5.2'
	},
	'3B DB 18 00 80 B1 FE 45 1F 83 00 31 C0 64 C7 FC 10 00 01 90 00 FA':{
		name:'Oberthur Cosmo V7 64K Dual/128K'
	},
	'3B DB 18 FF C0 80 B1 FE 75 1F 03 5A 43 37 2E 35 20 52 45 56 20 41 6F':{
		name:'ZeitControl BasicCard ZC7.5 user-programmable dual interface smart card',
		info:'http://www.smartcardfocus.com/shop/ilp/id~380/BasicCard_ZC7_5_Dual_Interface/p/index.shtml'
	},
	'3B DB 96 00 80 1F 03 00 31 C0 64 77 E3 03 00 82 90 00 C1':{
		name:'CAC (Common Access Card)'
	},
	'3B DB 96 00 80 1F 03 00 31 C0 64 B0 F3 10 00 07 90 00 80':{
		name:'DoD CAC, Oberthur ID One 128 v5.5 Dual'
	},
	'3B DB 96 00 80 1F 03 00 31 C0 64 B0 F3 10 00 0F 90 00 88':{
		name:'US Department of Veterans Affairs PIV'
	},
	'3B DB 96 00 80 B1 FE 45 1F 83 00 31 C0 64 1A 18 01 00 0F 90 00 52':{
		name:'Serbian Car registration ID card',
		info:'http://blog.goranrakic.com/archives/2011/07/citanje_saobracajne_dozvole_sa_cipom.html'
	},
	'3B DB 96 00 80 B1 FE 45 1F 83 00 31 C0 64 B0 FC 10 00 07 90 00 05':{
		name:'Oberthur Cosmo V7 debug card (SDK)'
	},
	'3B DB 96 00 80 B1 FE 45 1F 83 00 31 C0 64 C3 08 01 00 0F 90 00 9B':{
		name:'SIM Aruba (Italian provider)'
	},
	'3B DB 96 00 80 B1 FE 45 1F 83 00 31 C0 64 C7 FC 10 00 0F 90 00 7A':{
		name:'Guatemalan ID Card',
		info:'http://www.renap.gob.gt/'
	},
	'3B DB 96 00 81 B1 FE 45 1F 03 80 F9 A0 00 00 03 08 00 00 10 00 18':{
		name:'Oberthur CS PIV End Point v1.08 FIPS201 Certified'
	},
	'3B DB 96 00 81 B1 FE 45 1F 03 80 F9 A0 00 00 03 48 00 00 00 01 49':{
		name:'Fly Clear card'
	},
	'3B DB 96 00 81 B1 FE 45 1F 83 80 F9 A0 00 00 03 08 00 00 10 00 98':{
		name:'Oberthur Cosmo v7 128K with PIV applet',
		info:'http://www.smartcardfocus.com/shop/ilp/id~410/p/index.shtml'
	},
	'3B DB 96 FF C0 10 31 FE 45 80 67 15 01 B4 03 00 09 00 81 05 21':{
		name:'Digital Tachograph Card for Professional Driver'
	},
	'3B DC 18 FF 81 91 FE 1F C3 80 73 C8 21 13 66 01 06 11 59 00 01 28':{
		name:'JaCarta (PKI)',
		info:'http://www.aladdin-rd.ru'
	},
	'3B DC 18 FF 81 91 FE 1F C3 80 73 C8 21 13 66 01 0B 03 52 00 05 38':{
		name:'Athena IDProtect Smart Card Logon Card'
	},
	'3B DD 18 00 81 31 FE 45 80 F9 A0 00 00 00 77 01 08 00 07 90 00 FE':{
		name:'Oberthur Cosmo v7 IAS ECC'
	},
	'3B DD 18 00 81 31 FE 45 90 4C 41 54 56 49 41 2D 65 49 44 90 00 8C':{
		name:'Identity card (eID) Republic of Latvia',
		info:'http://www.pmlp.gov.lv/lv/pakalpojumi/passes/eid.html'
	},
	'3B DD 18 FF C0 80 B1 FE 45 1F C3 00 68 D2 76 00 00 28 04 04 11 00 90 00 C9':{
		name:'Russian Federation driver card for the digital tachograph'
	},
	'3B DD 96 FF 81 B1 FE 45 1F 03 00 64 04 05 08 03 73 96 21 D0 00 90 00 C9':{
		name:'German public health insurance card ("Gesundheitskarte"), issuer Techniker Krankenkasse'
	},
	'3B DD 96 FF 81 B1 FE 45 1F 03 00 64 05 73 10 A6 73 D6 21 C0 00 90 00 53':{
		name:'New european health insurance card of the German health insurance "BKK HERKULES"'
	},
	'3B DD 96 FF 81 B1 FE 45 1F 03 80 31 B0 52 02 03 64 04 1B B4 22 81 05 18':{
		name:'Austrian "e-card" G3 (State Health Insurance Card)',
		info:'(running StarCOS 3.4 by Giesecke & Devrient)'
	},
	'3B DD 97 FF 81 B1 FE 45 1F 03 00 64 04 05 08 03 73 96 21 D0 00 90 00 C8':{
		name:'German "eGK" (State Health Insurance Card)'
	},
	'3B DD 97 FF 81 B1 FE 45 1F 03 00 64 04 05 08 03 73 96 96 21 D0 00 90 C8':{
		name:'German public health insurance card ("Gesundheitskarte"), issuer Knappschaft'
	},
	'3B DE 18 FF 81 F1 FB 34 00 1F 07 44 45 53 46 69 72 65 53 41 4D 56 31 2E 30 D2':{
		name:'Mifare Desfire SAM Module'
	},
	'3B DE 18 FF 81 F1 FE 43 00 3F 07 83 44 45 53 46 69 72 65 38 20 53 41 4D 2D 58 17':{
		name:'NXP SAM'
	},
	'3B DE 18 FF C0 80 B1 FE 45 1F 03 45 73 74 45 49 44 20 76 65 72 20 31 2E 30 2B':{
		name:'Estonian Identity Card (EstEID v1.0 2006 cold)'
	},
	'3B DF 18 00 81 31 FE 67 00 5C 49 43 4D D4 91 47 D2 76 00 00 38 33 00 58':{
		name:'Infineon SICRYPT Card Module D4 PC/SC Compliance Test Card'
	},
	'3B DF 18 00 81 31 FE 7D 00 6B 15 0C 01 80 01 11 01 43 4E 53 10 31 80 E9':{
		name:'Provider: Actalis S.p.A.',
		info:'code: AT00006181	\
			website: http://www.actalis.it'
	},
	'3B DF 18 00 81 31 FE 7D 00 6B 15 0C 01 81 01 11 01 43 4E 53 10 31 80 E8':{
		name:'Italian healthcare card (TS) National Service Card (CNS)',
		info:'Carta Regionale dei Servizi - Regione Lombardia	\
			Tuscany TS-CNS http://www.regione.toscana.it/cartasanitaria'
	},
	'3B DF 18 FF 81 31 FE 45 80 59 01 80 48 49 44 43 37 30 30 73 00 01 1B 33':{
		name:'Crescendo C700 + MiFare 4K',
		info:'http://www.smartcardfocus.com/shop/ilp/id~265/p/index.shtml'
	},
	'3B DF 18 FF 81 F1 FE 43 00 1F 03 4D 49 46 41 52 45 20 50 6C 75 73 20 53 41 4D 98':{
		name:'Mifare SAM AV2'
	},
	'3B DF 18 FF 81 F1 FE 43 00 3F 03 83 4D 49 46 41 52 45 20 50 6C 75 73 20 53 41 4D 3B':{
		name:'NXP SAM AV2 module'
	},
	'3B DF 96 00 80 31 FE 45 00 31 B8 64 04 1F EC C1 73 94 01 80 82 90 00 EC':{
		name:'Ministry of Interior - France "Agent Card"',
		info:'(Carte Agent du Ministère de l\'Intérieur Français)'
	},
	'3B DF 96 00 80 31 FE 45 00 31 B8 64 04 29 EC C1 73 94 01 80 82 90 00 DA':{
		name:'Finnish identity card given by the City of Helsinki to all members of city council, board and commitees'
	},
	'3B DF 96 00 81 B1 FE 45 1F 83 80 73 CC 91 CB F9 A0 00 00 03 08 00 00 10 00 79':{
		name:'Test PIV Cards available for sale from NIST',
		info:'http://csrc.nist.gov/groups/SNS/piv/testcards.html'
	},
	'3B E0 00 00 81 31 20 40 30':{
		name:'SmarTEC'
	},
	'3B E0 00 FF 81 31 FE 45 14':{
		name:'"JUKICARD", digitally sign tax documents in Japan'
	},
	'3B E2 00 00 40 20 49 ..':{
		name:'Schlumberger Cryptoflex 4k'
	},
	'3B E2 00 00 40 20 49 05':{
		name:'Schlumberger Cryptoflex DES'
	},
	'3B E2 00 00 40 20 49 06':{
		name:'Schlumberger Cryptoflex'
	},
	'3B E2 00 00 40 20 49 07':{
		name:'Schlumberger Cryptoflex Key Generation'
	},
	'3B E2 00 FF C1 10 31 FE 55 C8 02 9C':{
		name:'Aladdin eToken PRO (USB token)',
		info:'Siemens CardOS M4.0'
	},
	'3B E3 00 FF 91 81 71 26 44 00 01 13 20 2D':{
		name:'Metrebus Card',
		info:'(used in Rome to store personal information and Atac subscription.	\
			Atac is the public transport company of the city of Rome.)	\
			http://www.atac.roma.it/smart/smart.asp?A=2&S=22&PR=4&LNG=2'
	},
	'3B E5 00 00 81 31 FE 45 D0 00 37 00 80 89':{
		name:'ATM card for Standard Chartered, Taiwan'
	},
	'3B E6 00 00 81 21 45 32 4B 01 01 01 01 7A':{
		name:'Axalto Cyberflex Palmera V5'
	},
	'3B E6 00 FF 81 31 FE 45 44 49 20 30 32 56 6B':{
		name:'VISA credit card (DKB)'
	},
	'3B E6 00 FF 81 31 FE 45 4A 43 4F 50 30 33 07':{
		name:'IBM JCOP 30/16'
	},
	'3B E6 00 FF 81 31 FE 45 4A 43 4F 50 31 30 05':{
		name:'IBM JCOP 10/16',
		info:'Rental card for Blockbuster, Taiwan'
	},
	'3B E6 00 FF 81 31 FE 45 4A 43 4F 50 32 30 06':{
		name:'IBM JCOP 20/16',
		info:'IBM JCOP20 with MIFARE	\
			or Datakey Smart Card Model 330J	\
			(http://www.datakey.com/products/smart_cards/products_sc_330j.shtml)'
	},
	'3B E6 00 FF 81 31 FE 45 4A 43 4F 50 32 31 07':{
		name:'IBM JCOP ID21'
	},
	'3B E6 00 FF 81 31 FE 45 4A 43 4F 50 33 30 07':{
		name:'Mifare ProX T=1'
	},
	'3B E6 00 FF 81 31 FE 45 4A 43 4F 50 33 31 06':{
		name:'IBM JCOP 30/31bio (contact interface)'
	},
	'3B E7 00 00 91 81 31 FE 41 01 10 30 01 00 90 80 49':{
		name:'"FirmenTicket" from the "Rheinbahn" for the "VRR"',
		info:'its a ticket corporates can buy for their employees. so its called	\
			"FirmenTicket". "Rheinbahn" is the local service operator for the	\
			mass traffic in and around duesseldorf/germany. "VRR" is traffic	\
			network spanning over at least a big part of north rhine westphalia	\
			(Verkehrsverbund Rhein-Ruhr)	\
			(http://www.vrr.de/de/tickets_und_tarife/vielfahrer/firmenticket/index.php)'
	},
	'3B E7 00 FF 81 31 FE 45 44 30 38 2E 30 20 36 57':{
		name:'EMV (MasterCard) card, issued by Raiffeisen Bank in Russia',
		info:'"Deutsche Kreditbank AG" Visa Card produced by AustriaCard GNC	\
			All cards (MasterCard, Maestro, VISA Electron) issued by Raiffeisen Bank in Romania'
	},
	'3B E8 00 00 81 31 20 45 00 73 C8 40 00 00 90 00 56':{
		name:'Visa credit card for Standard Chartered, Taiwan'
	},
	'3B E8 00 00 81 31 FE 45 00 73 C8 40 00 00 90 00 88':{
		name:'VISA Card (Skandinaviska Enskilda Banken) with Swedish BankID',
		info:'VISA card (Chinatrust Bank (Taiwan), dual-interface card with a Taipei Metro e-purse function)'
	},
	'3B E8 00 00 81 31 FE 45 4A 43 4F 50 76 32 34 .. ..':{
		name:'NXP JCOP v2.4.x (see hist bytes for more info)'
	},
	'3B E9 00 00 81 21 45 45 4D 56 5F 41 54 52 20 06 6C':{
		name:'VISA card, issued by HVB Bank Czech Republic (http://www.hvb.cz) or austrian BankAustria'
	},
	'3B E9 00 00 81 21 45 56 49 53 5F 49 4E 46 20 06 78':{
		name:'VISA card, issued by the Austrian "Raiffeisen" bank (http://www.raiffeisen.at/',
		info:'Visa Card - Maximum - Oyak Bank / Turkey	\
			VISA, issued by Austrian bank "Erste Bank"	\
			VISA card, issued by the Latvian bank "Latvijas Krajbanka"'
	},
	'3B E9 00 00 81 31 FE 45 45 4D 56 20 30 33 20 20 06 99':{
		name:'Visa credit card',
		info:'MasterCard credit card'
	},
	'3B E9 00 00 81 31 FE 45 45 4D 56 30 32 5F 34 53 06 80':{
		name:'Maestro Card issued by "First Investment Bank" in Bulgaria, http://fibank.bg/'
	},
	'3B E9 00 00 81 31 FE 45 4A 43 4F 50 31 30 56 32 32 A3':{
		name:'ORGA Open Platform DES 16k V2.0 / JCOP10'
	},
	'3B E9 00 00 81 31 FE 45 4A 43 4F 50 33 31 56 32 32 A0':{
		name:'JCOP 31 / 72k'
	},
	'3B E9 00 00 81 31 FE 45 4A 43 4F 50 34 31 56 32 32 A7':{
		name:'IBM JCOP v2.2 41'
	},
	'3B E9 00 00 81 31 FE 45 4D 43 41 20 30 33 20 20 06 88':{
		name:'PayLife Gold MasterCard -- an unbranded version of the master card'
	},
	'3B E9 00 FF C1 10 31 FE 55 00 64 05 00 C8 02 31 80 00 47':{
		name:'Identity card of Italian Republic'
	},
	'3B E9 00 FF C1 10 31 FE 55 C8 01 20 50 4E 34 30 31 32 AD':{
		name:'Siemens CardOS/M 3.0 (SLE66CX160S)'
	},
	'3B EA 00 00 81 31 FE 45 43 6F 6D 62 4F 53 20 49 49 00 FE':{
		name:'UBS VISA Gold Card',
		info:'MasterCard from lhv.ee'
	},
	'3B EA 00 00 81 31 FE 45 4A 43 4F 50 33 31 56 32 33 32 90':{
		name:'NAB VISA Debit card'
	},
	'3B EA 00 FF 81 31 20 75 00 64 05 14 01 02 31 00 90 00 27':{
		name:'GCOS-MDK'
	},
	'3B EA 00 FF 81 31 FE 45 54 55 42 2D 43 4B 01 03 01 00 7B':{
		name:'Technische Universität Berlin - Campus Karte',
		info:'Maybe Sm@rtCafé Expert 2.0 (Giesecke & Devrient)	\
			or GemXpresso 211 PK (Gemplus)	\
			Includes a Mifare-Chip (1 KB - Memory-Chip)'
	},
	'3B EB 00 00 81 31 42 45 4E 4C 43 68 53 43 4B 30 34 30 31 2B':{
		name:'Dutch University accesscard & Electronic purse & telphone card'
	},
	'3B EB 00 00 81 31 42 45 4E 4C 43 68 69 70 70 65 72 30 31 0A':{
		name:'Dutch Post (Chipper)'
	},
	'3B EC 00 FF 81 31 FE 45 A0 00 00 00 56 33 33 30 4A 33 06 00 A1':{
		name:'Datakey model 330J card, www.datakey.com',
		info:'http://www.hmk.de/downloads/datakey/Model_330J_Smart_Card.pdf	\
			Model 330J JavaCard v2.1.1	\
			Global Platform v2.0.1 specifications.	\
			JCCOS operating system applet (Java-based Cryptographic Card Operating System)'
	},
	'3B ED 00 00 81 31 20 43 80 31 80 65 B0 83 02 04 7E 83 00 90 00 32':{
		name:'Latvian Digital Signature Card (warm) (http://www.eme.lv/)'
	},
	'3B EE 00 00 81 31 FE 45 00 31 80 71 86 65 01 67 02 A0 0A 83 90 00 1B':{
		name:'IBM JCOP "Java Card 2.1.1" et "Open Plaform 2.0.1"'
	},
	'3B EE 00 00 81 31 FE 45 80 31 80 66 40 90 93 06 0F 17 83 0F 90 00 F3':{
		name:'IC card for the National Health Insurance, Taiwan'
	},
	'3B EF .. 00 40 14 80 25 43 45 52 45 53 57 .. .. 01 01 03 90 00':{
		name:'Electronic Identification Card from the FNMT, the Spanish Official',
		info:'Certification Authority (Fábrica Nacional de Moneda y Timbre)	\
			FNMT-Ceres Siemens Infineon SLE 19'
	},
	'3B EF .. 00 40 14 80 25 43 45 52 45 53 57 .. .. 01 02 03 90 00':{
		name:'FNMT-Ceres Siemens Infineon SLE 20',
		info:'Fábrica Nacional de Moneda y Timbre'
	},
	'3B EF 00 00 81 31 20 49 00 5C 50 43 54 10 27 F8 D2 76 00 00 38 33 00 4D':{
		name:'Infineon Technologies PC/SC Compliance Test Card V1.0'
	},
	'3B EF 00 00 81 31 40 69 00 5C 50 43 53 35 C5 3A D2 76 00 00 38 33 00 0F':{
		name:'Siemens Nixdorf Sicrypt'
	},
	'3B EF 00 00 81 31 FC 45 80 31 80 65 11 01 13 00 01 53 41 43 45 81 04 21':{
		name:'Slovenska sporitelna (SLSP) Bank card, Maestro Card with chip'
	},
	'3B EF 00 00 81 31 FC 45 80 31 80 65 11 11 23 10 02 53 41 43 45 81 04 12':{
		name:'VISA card issued by UBS, Switzerland'
	},
	'3B EF 00 00 81 31 FE 45 43 4D 42 5F 43 6F 6D 44 44 41 30 30 35 35 00 F7':{
		name:'Master Card (emitted by bank Nordea - Lithuania)'
	},
	'3B EF 00 00 81 31 FE 45 43 4D 42 5F 43 6F 6D 53 44 41 30 30 34 30 00 E4':{
		name:'VISA (Danske Bank Eesti / www.sampopank.ee)'
	},
	'3B EF 00 00 81 31 FE 45 43 4D 42 5F 43 6F 6D 53 44 41 30 30 35 31 00 E4':{
		name:'Visa (Sampo Estonia, 2010)'
	},
	'3B EF 00 00 81 31 FE 45 46 49 4F 4D 4B 5F 30 30 31 20 30 31 30 41 00 9C':{
		name:'MasterCard/PayPass Card issued by Czech FIO Banka a.s. (contact chip)',
		info:'note the ASCII string \' FIOMK_001 010A\' embedded in ATR'
	},
	'3B EF 00 00 81 31 FE 65 00 5C 50 43 53 D1 91 47 D2 76 00 00 38 33 00 70':{
		name:'Siemens/Infineon Sicrypt S26381-F252-V1 GS:03'
	},
	'3B EF 00 00 81 31 FE 67 00 5C 49 43 4D DB C9 7E D2 76 00 00 38 33 00 1E':{
		name:'Infineon SICRYPT CardModule Card'
	},
	'3B EF 00 FF 81 31 .. 45 65 63':{
		name:'Debit card (Germany): ec-cash, GeldKarte(DEM), Maestro, Cirrus'
	},
	'3B EF 00 FF 81 31 20 45 42 61 73 69 63 43 61 72 64 20 5A 43 32 2E 33 BD':{
		name:'ZeitControl BasicCard Enhanced 2.3'
	},
	'3B EF 00 FF 81 31 20 45 42 61 73 69 63 43 61 72 64 20 5A 43 33 2E 33 BC':{
		name:'Electronic Purse (Elton Senegal)'
	},
	'3B EF 00 FF 81 31 20 75 42 61 73 69 63 43 61 72 64 20 5A 43 33 2E 33 8C':{
		name:'ZeitControl BasicCard Enhanced 3.3'
	},
	'3B EF 00 FF 81 31 20 75 42 61 73 69 63 43 61 72 64 20 5A 43 33 2E 37 88':{
		name:'ZeitControl BasicCard Enhanced 3.7'
	},
	'3B EF 00 FF 81 31 20 75 42 61 73 69 63 43 61 72 64 20 5A 43 33 2E 39 86':{
		name:'ZeitControl BasicCard Enhanced 3.9'
	},
	'3B EF 00 FF 81 31 42 45 .* 38':{
		name:'UNI-Card'
	},
	'3B EF 00 FF 81 31 42 45 65 63 03 02 03 02 80 00 22 40 48 95 96 00 20 28':{
		name:'Scard Sparkasse Detmold, Deutschland BLZ 47650130'
	},
	'3B EF 00 FF 81 31 50 45 42 61 73 69 63 43 61 72 64 20 5A 43 31 2E 31 CC':{
		name:'ZeitControl BasicCard Compact 1.1'
	},
	'3B EF 00 FF 81 31 50 45 65 63 .. .. .. .. .. .. .. .. .. .. .. .. .. ..':{
		name:'GeldKarte v2 (Germany)'
	},
	'3B EF 00 FF 81 31 50 45 65 63 00 00 00 00 00 00 00 00 00 00 00 00 00 00':{
		name:'Geldkarte v2'
	},
	'3B EF 00 FF 81 31 50 45 65 63 08 0B 40 02 80 00 08 15 20 03 36 04 00 7E':{
		name:'old banking card (electronic-card / Maestro / Geldkarte) of the',
		info:'Stadt-Sparkasse Duesseldorf (like the above, but old - around 2002).'
	},
	'3B EF 00 FF 81 31 50 45 65 63 0D 24 20 02 80 00 05 08 33 56 10 01 02 43':{
		name:'German ec card'
	},
	'3B EF 00 FF 81 31 52 45 4D 46 43 20 49 42 4D 20 34 30 48 39 36 30 31 FB':{
		name:'IBM MFC 3.5 file system smart card',
		info:'(Card from the book "Smart Card Application Development Using Java")'
	},
	'3B EF 00 FF 81 31 60 45 65 63 04 02 11 00 00 00 00 00 A5 32 A5 01 11 B6':{
		name:'GledKarte',
		info:'Siemens M3-Module with a Motorola SC-28.	\
			G&D (Giesecke&Devrient) Geldkarten-OS mit der Version 11'
	},
	'3B EF 00 FF 81 31 60 45 65 63 06 03 14 02 50 00 06 51 08 11 5E 01 41 90':{
		name:'Geldkarte from Deutsche Bank, Thomson-Chip'
	},
	'3B EF 00 FF 81 31 66 45 49 42 4D 20 4D 46 43 34 30 30 32 30 38 33 31 A1':{
		name:'IBM MFC 4.1 file system smart card',
		info:'Card from the book "Smart Card Application Development Using Java"	\
			authors: Uwe Hansmann, Martin. S. Nicklous, Thomas Schäck, Achim Schneider, Frank Seliger'
	},
	'3B EF 00 FF 81 31 66 45 65 63 20 20 49 42 4D 20 33 2E 31 20 20 20 20':{
		name:'IBM eCash'
	},
	'3B EF 00 FF 81 31 66 45 65 63 20 20 49 42 4D 20 33 2E 31 20 20 20 20 CF':{
		name:'IBM eCash'
	},
	'3B EF 00 FF 81 31 86 45 49 42 4D 20 4D 46 43 34 30 30 30 30 38 33 31 43':{
		name:'ComCard MFC 4.1'
	},
	'3B EF 00 FF 81 31 FE 45 65 63 11 04 01 02 80 00 0F 27 40 00 03 01 00 E1':{
		name:'Postbank Geldkarte'
	},
	'3B EF 00 FF 81 31 FE 45 65 63 11 04 01 02 80 00 0F 46 20 04 23 01 00 C4':{
		name:'Postbank ec/Maestro (Germany)'
	},
	'3B EF 00 FF 81 31 FE 45 65 63 19 01 62 02 80 00 0F 00 35 00 42 06 20 BB':{
		name:'Credit card (Germany, Postbank AG): VISA'
	},
	'3B EF 00 FF 81 31 FE 45 80 31 C0 6B 49 42 4D 20 4A 65 74 5A 20 4D 32 39':{
		name:'UBS Internet Card (IBM JetZ M2)'
	},
	'3B EF 00 FF 81 31 FF 65 49 42 4D 20 4D 46 43 39 32 32 39 32 38 39 30 17':{
		name:'IBM MFC 4.22 (University of Cambridge smartchip card)'
	},
	'3B F0 12 00 FF 91 81 B1 7C 45 1F 03 99':{
		name:'Japanese Chijou Digital B-CAS Card (pay TV)'
	},
	'3B F0 12 00 FF 91 81 B1 EF 45 1F 03 0A':{
		name:'Japanese Digital CATV C-CAS card'
	},
	'3B F0 13 00 00 10 00':{
		name:'MasterCard ETEC InterOp 27. This is an dual-app Maestro/MasterCard Credit EMV test card'
	},
	'3B F2 18 00 00 C1 0A 31 FE 55 C8 06 75':{
		name:'HID iCLASS P16K C4H',
		info:'proximity card used for both door locks and keystore'
	},
	'3B F2 18 00 02 C1 0A 31 FE 55 C8 07 76':{
		name:'Siemens CardOS V4.3'
	},
	'3B F2 18 00 02 C1 0A 31 FE 58 C8 08 74':{
		name:'Siemens CardOS V4.3B'
	},
	'3B F2 18 00 02 C1 0A 31 FE 58 C8 09 75':{
		name:'Siemens CardOS V4.2B'
	},
	'3B F2 18 00 02 C1 0A 31 FE 58 C8 0B 77':{
		name:'CardOS V4.2C (SLE66CX360PE dual interface)'
	},
	'3B F2 18 00 FF C1 0A 31 FE 55 C8 06 8A':{
		name:'Siemens CardOS M 4.2 (SLE66CX642P)'
	},
	'3B F2 98 00 FF C1 10 31 FE 55 C8 03 15':{
		name:'Siemens CardOS M 4.01 (SLE66CX320P)'
	},
	'3B F2 98 00 FF C1 10 31 FE 55 C8 04 12':{
		name:'CardOS M4.01a (SLE66CX322P)'
	},
	'3B F3 96 00 FF C0 0A 31 FE 4D 80 31 E0 83':{
		name:'MARX Cryptoken (supported by RaakSign)'
	},
	'3B F4 18 00 02 C1 0A 31 FE 58 56 34 63 76 C5':{
		name:'Eutron CryptoIdentity (reader + card token)'
	},
	'3B F4 18 00 FF 81 31 80 55 00 31 80 00 C7':{
		name:'Identity card of Italian Republic'
	},
	'3B F4 98 00 FF C1 10 31 FE 55 4D 34 63 76 B4':{
		name:'Eutron Digipass 860 (reader + card token)'
	},
	'3B F5 18 00 00 81 31 FE 45 4D 79 45 49 44 9A':{
		name:'Aventra ActiveSecurity MyEID',
		info:'http://www.aventra.fi/pdf/ActiveSecurity%20MyEID%20Tokens%20white%20paper%20(2p)%20EN.pdf'
	},
	'3B F5 91 00 FF 91 81 71 FE 40 00 41 00 00 00 00 05':{
		name:'Contactless Mifare Ultralight'
	},
	'3B F5 91 00 FF 91 81 71 FE 40 00 41 08 00 00 00 0D':{
		name:'Contactless Mifare'
	},
	'3B F5 91 00 FF 91 81 71 FE 40 00 41 18 00 00 00 1D':{
		name:'Contactless Mifare 4k'
	},
	'3B F5 91 00 FF 91 81 71 FE 40 00 41 88 00 00 00 8D':{
		name:'Contactless Mifare 1k or 4k'
	},
	'3B F5 91 00 FF 91 81 71 FE 40 00 42 00 01 00 81 86':{
		name:'American Express Blue RFID'
	},
	'3B F6 18 00 FF 81 31 FE 45 4A 32 41 30 38 30 1B':{
		name:'NXP J2A080 - 80K (blank)',
		info:'http://www.classic.nxp.com/acrobat_download2/literature/9397/75016728.pdf'
	},
	'3B F6 18 00 FF 81 31 FE 45 4A 43 4F 50 32 30 0E':{
		name:'IBM JCOP20'
	},
	'3B F6 18 00 FF 81 31 FE 45 4A 43 4F 50 33 30 0F':{
		name:'Philips P8RF5016 running IBM JCOP 30 (contact interface)'
	},
	'3B F6 18 00 FF 81 31 FE 45 4A 43 4F 50 33 31 0E':{
		name:'IBM JCOP BIO31',
		info:'IBM JCOP BIO31 Java card'
	},
	'3B F7 11 00 00 81 71 80 42 00 00 63 95 0A 01 90 00 B9':{
		name:'ATM Card for Chunghwa Post Inc., Taiwan'
	},
	'3B F7 11 00 00 81 71 FE 42 00 00 63 95 01 01 90 00 CC':{
		name:'ATM Card for Mega International Commercial Bank, Taiwan',
		info:'ATM card for HSBC Direct, Taiwan	\
			ATM card for TaChong Bank, Taiwan	\
			ATM card for Chunghwa Post, Taiwan	\
			VISA card for Taipei Fubon Bank, Taiwan'
	},
	'3B F7 11 00 00 81 71 FE 42 00 00 63 95 31 02 90 00 FF':{
		name:'VISA card for Taipei Fubon Bank, Taiwan'
	},
	'3B F7 11 00 00 81 71 FE 42 00 00 63 95 31 05 90 00 F8':{
		name:'ATM card for Chunghwa Post, Taiwan',
		info:'ATM card for E.Sun Commercial Bank, Taiwan'
	},
	'3B F7 11 00 01 40 96 54 30 04 0E 6C B6 D6 90 00':{
		name:'PIC16F876-04/SP (PICCard2) or',
		info:'PIC16F84A-04/P + 24LC16B (PICCard1) or	\
			Canal + Canal Digital Spain year 2000/2001 or	\
			PIC Silver Card 2 (PIC16F876/7 + 24C64)'
	},
	'3B F7 11 00 01 40 96 58 42 14 0E 6C B6 D6':{
		name:'UK on digital (terrestrial digital TV card)'
	},
	'3B F7 11 00 01 40 96 70 70 07 0E 6C B6 D6':{
		name:'Cyfra+ SECA Card (http://cyfraplus.pl/)'
	},
	'3B F7 11 00 01 40 96 70 70 07 0E 6C B6 D6 90 00':{
		name:'M-II (a.k.a. M-2, a.k.a. Platinum Card), AT90SC6464C based',
		info:'KnotCard II	\
			TitaniumElite'
	},
	'3B F7 11 00 01 40 96 70 70 0A 0E 6C B6 D6':{
		name:'TopUp TV NagraVision viewing card'
	},
	'3B F7 11 00 01 40 96 70 70 17 0E 6C B6 D6':{
		name:'Canal Satellite card (VERSION 7.1 SYSTEM / SECA2)'
	},
	'3B F7 11 00 01 40 96 70 70 37 0E 6C B6 D6':{
		name:'Carte pour decodeur cable numérique (fourni par www.voo.be et',
		info:'www.ledecodeur.be)'
	},
	'3B F7 11 00 01 40 96 70 70 67 0E 6C B6 D6':{
		name:'UK TopUp TV'
	},
	'3B F7 11 00 01 40 96 70 71 09 0E 6C B6 D6':{
		name:'Carte pour décodeur télé de Neuf Telecom TV'
	},
	'3B F7 13 00 00 81 31 FE 45 4A 43 4F 50 32 34 .. ..':{
		name:'NXP JCOP v2.4.x (see hist bytes for more info)'
	},
	'3B F7 18 00 00 80 31 FE 45 73 66 74 65 2D 6E 66 C4':{
		name:'SmartCafe Expert 3.2 72K'
	},
	'3B F7 18 00 00 81 71 80 42 00 00 63 95 0A 01 90 00 B0':{
		name:'7-Eleven icash card, Taiwan'
	},
	'3B F7 91 00 FF 91 81 71 FE 40 00 41 20 00 11 77 81 80 40':{
		name:'Contactless Mifare DESFire'
	},
	'3B F8 13 00 00 81 31 FE 45 4A 43 4F 50 76 32 34 .. ..':{
		name:'NXP JCOP v2.4.x (see hist bytes for more info)'
	},
	'3B F8 18 00 00 80 31 FE 45 00 73 C8 40 13 00 90 00 92':{
		name:'G&D StarSign Token'
	},
	'3B F8 18 00 00 81 31 FE 45 00 73 C8 40 00 00 90 00 80':{
		name:'NXP JCOP 31 V2.2 36K - S/C I/F'
	},
	'3B F8 18 00 00 81 31 FE 45 00 73 C8 40 13 00 90 00 93':{
		name:'Giesecke & Devrient Sm@rtCafé Expert 3.0'
	},
	'3B F8 18 00 FF 81 31 FE 45 4A 43 4F 50 76 32 34 31 43':{
		name:'VIVOtech SAM',
		info:'NXP JCOP V241'
	},
	'3B F9 13 00 00 81 31 FE 45 4A 43 4F 50 32 34 .. .. .. ..':{
		name:'NXP JCOP v2.4.x (see hist bytes for more info)'
	},
	'3B F9 13 00 00 81 31 FE 45 4A 43 4F 50 34 31 56 32 34 A2':{
		name:'JCOP41 v2.4'
	},
	'3B F9 13 00 FF 10 80 80 31 E0 55 42 45 52 47 53':{
		name:'Banrisul bank'
	},
	'3B F9 18 00 00 81 31 FE 45 39 35 32 38 35 30 31 33 31 DA':{
		name:'JCOP31 / 72B1 V2.2 (4096 RSA key support)',
		info:'Smartcard Dual Interface JCOP31 with 72KB EEPROM and V2.2 Java Card Open Platform'
	},
	'3B F9 18 00 00 81 31 FE 45 4A 43 4F 50 32 31 56 32 32 A9':{
		name:'NXP JCOP 21 V2.2 36K'
	},
	'3B F9 18 00 00 81 31 FE 45 4A 43 4F 50 33 31 56 32 32 A8':{
		name:'JCOP31 / 72B1 V2.2',
		info:'Smartcard Dual Interface JCOP31 with 72KB EEPROM and V2.2 Java Card Open Platform'
	},
	'3B F9 94 00 00 81 31 FE 65 46 54 20 56 31 30 30 90 00 83':{
		name:'ePass 2000'
	},
	'3B F9 98 00 FF C1 10 31 FE 55 41 4D 20 43 4D 44 31 31 30 83':{
		name:'Service card of the Ministry of Defense of Italy - Military Aviation'
	},
	'3B F9 98 00 FF C1 10 31 FE 55 45 49 20 43 4D 44 31 31 30 83':{
		name:'Service card of the Ministry of Defense of Italy - Italian Army'
	},
	'3B F9 98 00 FF C1 10 31 FE 55 4D 4D 20 43 4D 44 31 31 30 8F':{
		name:'Service card of the Ministry of Defense of Italy - Navy'
	},
	'3B F9 98 00 FF C1 10 31 FE 55 50 43 20 43 4D 44 31 31 30 9C':{
		name:'Service card of the Ministry of Defense of Italy - Civil personnel'
	},
	'3B FA 11 00 00 81 31 FE 45 43 6F 6D 62 4F 53 20 49 56 00 E0':{
		name:'MyWireCard 2go Prepaid VISA Card'
	},
	'3B FA 11 00 02 40 60 43 C6 02 F8 03 03 00 00 90 00':{
		name:'DeLaRue DX(?)'
	},
	'3B FA 13 00 00 81 31 FE 45 44 65 78 61 20 43 46 20 76 31 98':{
		name:'Dexa Systems Crossfire Card (PKI)',
		info:'http://www.dexasystems.com/products-services/products/dexa-smartcards-credential-tokens-peripherals'
	},
	'3B FA 13 00 00 81 31 FE 45 4A 43 4F 50 3. 3. 56 32 33 32 ..':{
		name:'JCOPxx/yy v2.3.2 (see hist bytes for more info)'
	},
	'3B FA 13 00 00 81 31 FE 45 4A 43 4F 50 32 31 56 32 33 31 91':{
		name:'NXP JCOP 21 V2.3.1 36K'
	},
	'3B FA 13 00 00 81 31 FE 45 4A 43 4F 50 34 31 56':{
		name:'JCOP41 V221'
	},
	'3B FA 13 00 00 81 31 FE 45 4A 43 4F 50 34 31 56 32 33 31 97':{
		name:'JCOP41 /72K (eID)'
	},
	'3B FA 13 00 00 81 31 FE 45 4A 43 4F 50 76 32 34 .. .. .. ..':{
		name:'NXP JCOP v2.4.x (see hist bytes for more info)'
	},
	'3B FA 13 00 FF 81 31 80 45 00 31 C1 73 C0 01 00 00 90 00 B1':{
		name:'OpenPGP'
	},
	'3B FA 18 00 00 81 31 FE 45 06 08 60 84 10 01 87 6F 06 02 FE':{
		name:'Card used by the Dutch health insurers to give medical personell access to patient insurance information'
	},
	'3B FA 18 00 00 81 31 FE 45 4A 43 4F 50 34 31 56 32 32 31 9D':{
		name:'NXP JCOP 41 v2.2.1 72k SmartCard I/F'
	},
	'3B FA 18 00 02 C1 0A 31 FE 58 4B 53 77 69 73 73 53 69 67 6E 89':{
		name:'SuisseId card (used for qualified signatures)',
		info:'http://postsuisseid.ch/de/suisseid	\
			http://www.suisseid.ch/'
	},
	'3B FA 18 00 FF 81 31 FE 45 4A 43 4F 50 32 31 56 32 33 31 65':{
		name:'TrubDemax healthcare card',
		info:'JCOP 21 / 72k'
	},
	'3B FA 18 00 FF 81 31 FE 45 4A 43 4F 50 34 31 56 32 32 31 62':{
		name:'JCOP41',
		info:'HID Crescendo C700 http://www.hidcorp.com/	\
			Should be compatible to RAAK http://www.raaktechnologies.com/	\
			Marx CrypToken MX2048-JCOP USB Token'
	},
	'3B FA 18 00 FF 81 31 FE 45 4A 43 4F 50 34 31 56 32 33 31 63':{
		name:'JCOP41 V2.3.1 Dual Interface, Mifare emulation, 72K (NXP SmartMX P5CT072)',
		info:'JCOP (Java Card OpenPlatform) is a Java smart card distributed and developed by NXP.	\
			The JCOP 41 v2.3.1. is an USB-smart card and can be used not only with standard smart card reader, but also with simple USB-connectors. The JCOP card is connected as ICCD card and can be used with such ICCD standard drivers.	\
			JCOP 41 is a Dual-Interface Smart Card, that means, the card can also be contacted with a contactless card reader. For building access systems, this card is also be able to emulate Mifare Classic 1k/4k.	\
			JCOP 41 v2.3.1 is compliant to JavaCard Standard 2.2.1. and GlobalPlattform 2.1.1. Their cryptographic features supports RSA up to 2432 bit, \'Eliptic curves\' - ECC GF(2n), AES and 3DES.	\
			More information is available here:	\
			http://www.nxp.com/documents/short_data_sheet/P5Cx009_P5Cx072_FAM_SDS.pdf'
	},
	'3B FA 94 00 00 81 31 20 43 80 65 A2 01 01 01 3D 72 D6 43 21':{
		name:'GemXpresso Pro R3 32PK (MPCOS, T=1)'
	},
	'3B FA 98 00 FF C1 10 31 FE 55 C8 03 53 41 47 5F 50 4B 49 32 77':{
		name:'Siemens corporate ID card (access to the building / rooms etc,',
		info:'stores PKI private keys/certificates)'
	},
	'3B FA 98 00 FF C1 10 31 FE 55 C8 04 53 41 47 5F 50 4B 49 32 70':{
		name:'Siemens Corporate Card (Belgium , Germany)'
	},
	'3B FB 11 00 00 40 28 80 59 53 50 59 52 55 53 AE 00 02':{
		name:'Spyrus Rosetta Basic'
	},
	'3B FB 11 00 00 40 78 80 59 53 50 59 52 55 53 AE 02 02':{
		name:'Rosetta® Series II Smart Card manufactured by Spyrus',
		info:'http://spyrus.com/products/rosetta_smart_usb.asp'
	},
	'3B FB 11 00 00 81 31 FE 45 00 31 C0 64 77 E9 10 00 00 90 00 6A':{
		name:'OCS ID-One Cosmo Card USB Token'
	},
	'3B FB 13 00 00 81 31 FE 45 4A 43 4F 50 53 3. 3. 56 32 33 32 ..':{
		name:'JCOP-Sxx/yy v2.3.2 (see hist bytes for more info)'
	},
	'3B FB 13 00 FF 81 31 80 75 5A 43 35 2E 35 20 52 45 56 20 47 63':{
		name:'ZeitControl BasicCard 5.5'
	},
	'3B FB 13 00 FF 81 31 80 75 5A 43 35 2E 36 20 52 45 56 20 4D 6A':{
		name:'ZeitControl BasicCard ZC5.6 user-programmable smart card',
		info:'http://www.basiccard.com/index.html?overview.htm'
	},
	'3B FB 13 00 FF 81 31 80 75 5A 43 36 2E 35 20 52 45 56 20 43 64':{
		name:'ZeitControl BasicCard 6.5, multiapplication with 30 kByte EEPROM'
	},
	'3B FB 13 00 FF C0 80 31 80 75 5A 43 35 2E 34 20 52 45 56 20 41 A5':{
		name:'ZeitControl BasicCard Professional 5.4 Revision A'
	},
	'3B FB 13 00 FF C0 80 31 80 75 5A 43 35 2E 34 20 52 45 56 20 48 AC':{
		name:'ZeitControl BasicCard Professional 5.4'
	},
	'3B FB 18 00 00 81 31 FE 45 00 31 C0 64 77 E9 10 00 01 90 00 62':{
		name:'ID card for personal of "Govern Illes Balears"',
		info:'http://www.caib.es/sacmicrofront/contenido.do?cont=7584&mkey=M08110610180317195848&&lang=en'
	},
	'3B FB 91 00 FF 91 81 71 FE 40 00 41 20 00 01 00 81 20 63 CB A0 80 03':{
		name:'Carrefour, MasterCard credit card, Pass Banque, Oberthur - contactless/PayPass'
	},
	'3B FB 96 00 00 80 31 FE 45 00 31 C0 64 77 E3 02 00 82 90 00 76':{
		name:'Oberthur ID-One Cosmo'
	},
	'3B FB 96 00 00 81 31 FE 45 00 31 C0 64 77 E9 10 00 01 90 00 EC':{
		name:'Oberthur ID-ONE v5.4'
	},
	'3B FB 96 00 00 81 31 FE 45 00 31 C0 64 77 E9 10 00 0F 90 00 E2':{
		name:'Elektroniczna Legitymacja Studencka - Polish Student\'s ID Issued in Poznan in 2007'
	},
	'3B FB 96 00 00 81 31 FE 45 56 44 53 49 35 40 01 00 04 00 01 1F':{
		name:'Vasco DIGIPASS KEY 200 usb token',
		info:'http://www.vasco.com/products/digipass/digipass_pki/digipass_pki_keys/digipass_key_200.aspx	\
			Should contain a \'Oberthur cosmo v 5.4 or V7.0D\' smartcard'
	},
	'3B FB 98 00 FF C1 10 31 FE 55 00 64 05 20 47 03 31 80 00 90 00 F3':{
		name:'Gemplus GemGate 32K',
		info:'distributed by Postecert (www.postecert.it) to legally sign documents'
	},
	'3B FC 98 00 FF C1 10 31 FE 55 C8 03 49 6E 66 6F 63 61 6D 65 72 65 28':{
		name:'New Card Infocamere (Italy) series 1402...',
		info:'http://www.card.infocamere.it/	\
			 Siemens Informatica - Siemens M4.01a	\
			 chip Infineon SLE66CX322P (CC EAL5)	\
			 Memory EEPROM: 32KB	\
			 Operating system CARDOS	\
			 Max numero dei tentativi PIN: 3	\
			 Pin: da 5 a 8 digit	\
			 Unblocked by tool CARDOS API 2.2'
	},
	'3B FD 13 00 00 81 31 FE 45 41 37 30 30 36 43 47 20 32 34 32 52 31 D6':{
		name:'YubiKey NEO (token)'
	},
	'3B FD 13 00 00 81 31 FE 45 4A 43 4F 50 32 31 76 32 33 31 47 44 54 E1':{
		name:'National Health Insurance Card, Taiwan'
	},
	'3B FD 18 00 00 80 31 FE 45 00 31 80 71 8E 64 52 D9 04 00 81 90 00 5B':{
		name:'Oberthur Card Systems, authentIC'
	},
	'3B FD 18 00 00 80 31 FE 45 73 66 74 65 2D 63 64 30 38 30 2D 6E 66 DC':{
		name:'G&D Sm@Cafe 3.1 (eID)'
	},
	'3B FD 18 00 00 81 31 FE 45 80 31 80 65 40 90 7B 01 51 83 07 90 00 55':{
		name:'Croatian Health Care card'
	},
	'3B FD 18 00 FF 80 B1 FE 45 1F 07 80 73 00 21 13 57 4A 54 48 61 31 47 00 5F':{
		name:'Activkey Sim',
		info:'http://www.actividentity.com/products/activkey_usb_tokens__home.php'
	},
	'3B FD 18 00 FF 80 B1 FE 45 1F 07 80 73 00 21 13 57 4A 54 48 61 31 48 00 50':{
		name:'G&D Sm@rtCafe Expert 64 v2'
	},
	'3B FD 18 00 FF 80 B1 FE 45 1F 07 80 73 00 21 13 57 4A 54 48 61 31 4A 00 52':{
		name:'e-CPF issued by AASP (Lawyers Association of São Paulo, Brazil)'
	},
	'3B FD 91 00 FF 91 81 71 FE 40 00 41 20 00 41 00 81 80 31 C0 73 D6 21 C0 D8':{
		name:'Sparkasse Hanau - German contactless GeldKarte (PPSE, girogo)',
		info:'https://www.geldkarte.de/_www/en/pub/geldkarte/service_navigation/about_us.php'
	},
	'3B FD 94 00 00 81 31 20 43 80 31 80 65 B0 83 02 04 7E 83 00 90 00 B6':{
		name:'GXPPRo-R3.x STD PTS T=1',
		info:'Latvian Digital Signature Card (cold) (http://www.eme.lv/)'
	},
	'3B FD 94 00 00 81 31 60 65 80 31 C0 69 4D 54 43 4F 53 73 01 01 11 E0':{
		name:'MTCOS Light, http://www.masktech.de/products/mtcoslight/index.html'
	},
	'3B FD 96 00 00 81 31 20 43 80 31 80 65 B0 83 11 00 C8 83 00 90 00 15':{
		name:'Gemalto TOP IM GX4 MSA081, T=1 (PKI)'
	},
	'3B FD 96 00 00 81 31 20 43 80 31 80 65 B0 83 11 48 C8 83 00 90 00':{
		name:'Pay TV'
	},
	'3B FE 18 00 00 80 31 FE 45 45 73 74 45 49 44 20 76 65 72 20 31 2E 30 A8':{
		name:'Estonian Identity Card (EstEID 3.0 "JavaCard" cold)'
	},
	'3B FE 18 00 00 80 31 FE 45 80 31 80 66 40 90 A4 16 2A 00 83 01 90 00 E1':{
		name:'Estonian Identity Card (EstEID 3.0 "JavaCard" warm)'
	},
	'3B FE 18 00 00 80 31 FE 45 80 31 80 66 40 90 A4 16 2A 00 83 0F 90 00 EF':{
		name:'iEstonian Identity Card (EstEID 3.0 (18.01.2011) warm)'
	},
	'3B FE 91 00 FF 91 81 71 FE 40 00 41 28 00 01 80 81 00 73 C8 40 00 00 90 00 4D':{
		name:'Philips SmartMX chip (IBMs JCOP OS)'
	},
	'3B FE 91 00 FF 91 81 71 FE 40 00 41 28 00 11 33 B0 4A 43 4F 50 33 31 56 32 C4':{
		name:'JCOP31 72K',
		info:'dual interface functionality, 1K Mifare emulation.'
	},
	'3B FE 94 00 00 80 1F 42 80 31 80 66 47 50 20 45 83 01 83 01 90 00 02':{
		name:'TATA Docomo UICC (Telecommunication)',
		info:'http://www.tatadocomo.com/'
	},
	'3B FE 94 00 FF 80 B1 FA 45 1F 03 45 73 74 45 49 44 20 76 65 72 20 31 2E 30 43':{
		name:'Estonian Identity Card (EstEID v1.0 cold)',
		info:'Estonian Identity Card (EstEID v1.1 "MULTOS" warm)'
	},
	'3B FE 96 00 FF C0 0A 31 FE 4D 45 73 74 45 49 44 20 76 65 72 20 31 2E 30 9B':{
		name:'Estonian Identity Card (EstEID v1.1 compatible)',
		info:'http://www.id.ee/?id=11019&&langchange=1'
	},
	'3B FF .. 00 FF 81 31 .. 45 65 63 .. .. .. .. .. .. .. .. .. .. .. .. .. ..':{
		name:'Debit card (Germany): ec-cash, GeldKarte(EUR), Maestro, Cirrus, ...'
	},
	'3B FF 00 00 FF 81 31 FE 45 80 25 A0 00 00 00 56 57 53 43 36 35 30 00 00 00':{
		name:'SafeNet SC650'
	},
	'3B FF 00 FF 81 31 .. 45 65 63 .. .. .. .. .. .. .. .. .. .. .. .. .. ..':{
		name:'Debit card (Germany): ec-cash, GeldKarte(EUR), Maestro, Cirrus, ...'
	},
	'3B FF 11 00 00 81 31 FE 4D 80 25 A0 00 00 00 56 57 44 4B 33 33 30 06 00 D0':{
		name:'Datakey 32K PKI Smart Card Model 330',
		info:'(http://www.datakey.com/products/smart_cards/products_sc_330.shtml)'
	},
	'3B FF 11 00 00 81 71 40 42 00 00 21 01 31 42 52 00 0[0,5] 63 .. .. .. .. 90 00.*':{
		name:'Smart Card "The Smart Way to Login"',
		info:'Used on Acer TravelMate to secure boot'
	},
	'3B FF 11 00 02 40 64 80 69 A2 07 01 03 57 00 00 FF 00 83 00 90 00':{
		name:'Gemplus GemXpresso'
	},
	'3B FF 13 00 00 81 31 FE 45 4F 57 4F 4B 31 30 2D 4A .. .. .. .. .. .. .. ..':{
		name:'OWOK (One Web, One Key) login card, http://www.reiner-sct.com/owok/',
		info:'Reiner SCT loginCard https://cardlogin.reiner-sct.com/'
	},
	'3B FF 13 00 00 81 31 FE 4D 80 25 A0 00 00 00 56 57 44 4B 33 33 30 06 00 D2':{
		name:'Datakey DCOS model 330 (DKCCOS 6.0 token)'
	},
	'3B FF 13 00 FF 80 31 FE 45 53 46 53 45 2D 43 58 33 32 32 2D 56 01 01 01 65':{
		name:'Portugal Santander Totta Universitários "Associação Academica de Coimbra"'
	},
	'3B FF 13 00 FF 80 31 FE 45 53 46 53 45 2D 43 58 33 32 32 2D 56 18 02 08 76':{
		name:'SmartCafe Expert Java'
	},
	'3B FF 13 00 FF 80 31 FE 45 53 46 53 45 2D 43 58 33 32 32 2D 56 18 03 08 77':{
		name:'Giesecke & Devrient SmartCafe Expert 32K v2.0 #2'
	},
	'3B FF 13 00 FF 81 31 FE 45 65 63 11 04 50 02 80 00 08 39 00 04 02 05 02 E9':{
		name:'German "Geldkarte" supplied by the Deutsche Bank in Karlsruhe,',
		info:'Baden-Württemberg, Germany.'
	},
	'3B FF 13 00 FF 81 31 FE 45 65 63 11 04 50 02 80 00 08 54 00 04 23 05 02 A5':{
		name:'Maestrocard/Geldkarte (Stadtsparkasse Haltern, Germany)'
	},
	'3B FF 13 00 FF 81 31 FE 5D 80 25 A0 00 00 00 56 57 44 4B 33 32 30 05 00 3F':{
		name:'Datakey DCOS model 320'
	},
	'3B FF 18 00 00 81 31 FE 45 00 6B 04 05 01 00 01 11 01 43 4E 53 10 31 80 69':{
		name:'Sanitary Card of "Friuli Venezia Giulia" region (Italian Republic)',
		info:'Carta Nazionale dei Servizi (Italia) http://cartaservizi.regione.fvg.it/'
	},
	'3B FF 18 00 00 81 31 FE 45 00 6B 04 05 01 00 01 12 02 48 50 43 10 31 80 6C':{
		name:'Carta del Professionista Sanitario - CNS - Provincia autonoma di Trento',
		info:'Professional Health card, Autonomous Province of Trento'
	},
	'3B FF 18 00 00 81 31 FE 45 00 6B 04 05 01 00 01 21 01 43 4E 53 10 31 80 59':{
		name:'CNS - Carta Nazionale dei Servizi (Italia)',
		info:'PA emittente: Regione Autonoma della Sardegna	\
			Carta del Servizio Sanitario Regionale - Emilia Romagna'
	},
	'3B FF 18 00 00 81 31 FE 4D 80 25 A0 00 00 00 56 57 44 4B 34 30 30 06 00 DD':{
		name:'DataKey 400 (DK400)'
	},
	'3B FF 18 00 FF 80 31 FE 45 53 46 53 45 2D 43 58 33 32 32 2D 56 18 03 08 7C':{
		name:'Giesecke & Devrient Sm@rtCafé Expert 2.0'
	},
	'3B FF 18 00 FF 80 31 FE 45 53 6D 40 72 74 43 61 66 65 45 78 70 65 72 74 65':{
		name:'Giesecke & Devrient SmartCafe 32K v1'
	},
	'3B FF 18 00 FF 81 31 .. 45 65 63 .. .. .. .. .. .. .. .. .. .. .. .. .. ..':{
		name:'Geldkarte (generic ATR)'
	},
	'3B FF 18 00 FF 81 31 3C 45 65 63 0D 02 31 02 50 00 10 90 00 26 00 04 10 09':{
		name:'Maestrocard/Geldkarte (Postbank, Germany)'
	},
	'3B FF 18 00 FF 81 31 3C 45 65 63 0D 02 31 02 50 00 10 90 01 55 00 04 10 7B':{
		name:'Volksbank VR-BankCard (GeldKarte)'
	},
	'3B FF 18 00 FF 81 31 3C 45 65 63 0D 02 31 02 50 00 10 90 05 29 00 04 10 03':{
		name:'Geldkarte/HBCI(DDV-1) (Stadtsparkasse Vorpommern, Germany)'
	},
	'3B FF 18 00 FF 81 31 3C 45 65 63 0D 02 31 02 50 00 10 90 07 88 00 04 10 A0':{
		name:'HBCI-Karte (Berliner Sparkasse, Germany)'
	},
	'3B FF 18 00 FF 81 31 3C 45 65 63 0D 02 31 02 50 00 10 90 13 82 00 04 10 BE':{
		name:'Bremer Karte ("Geldkarte und BSAG-Kundenkarte in einem.")',
		info:'http://www.bsag.de/4911.php'
	},
	'3B FF 18 00 FF 81 31 3C 45 65 63 0D 02 31 02 50 00 10 90 14 06 00 04 10 3D':{
		name:'Geldkarte/HBCI(DDV-1) (Staedtische Sparkasse Offenbach, Germany)'
	},
	'3B FF 18 00 FF 81 31 3C 45 65 63 0D 02 31 02 50 00 10 90 14 44 00 04 10 7F':{
		name:'Geldkarte/HBCI (Kreissparkasse Ebersberg, Deutschland)'
	},
	'3B FF 18 00 FF 81 31 3C 45 65 63 0D 02 31 02 50 00 10 90 55 70 00 04 10 0A':{
		name:'EC-Card from DKB (Deutsche Kreditbank AG)'
	},
	'3B FF 18 00 FF 81 31 3C 45 65 63 0D 02 31 02 80 00 12 24 30 00 20 04 10 59':{
		name:'Geldkarte (Germany)'
	},
	'3B FF 18 00 FF 81 31 50 45 65 63 .. .. .. .. .. .. .. .. .. .. .. .. .. ..':{
		name:'GeldKarte v3 (Germany)'
	},
	'3B FF 18 00 FF 81 31 FE 45 54 48 43 43 31 30 54 45 43 4F 47 44 49 4E 31 26':{
		name:'National Health Insurance Card, Taiwan'
	},
	'3B FF 18 00 FF 81 31 FE 45 65 63 0D 04 50 02 80 00 08 90 09 70 00 05 00 2A':{
		name:'Landesbank baden-Württemberg Geldkarte'
	},
	'3B FF 18 00 FF 81 31 FE 45 65 63 0D 07 63 05 28 00 0D 90 81 06 00 06 15 58':{
		name:'Geldkarte/HBCI (Frankfurter Sparkasse, Germany)'
	},
	'3B FF 18 00 FF 81 31 FE 45 65 63 0D 07 63 07 64 00 0D .. .. .. .. 06 15 ..':{
		name:'Giesecke & Devrient GmbH',
		info:'ROM Mask=ecD6.3	\
			Init-Table=SDP2G3F0.E_2 (BES0), SWP2G3H0.E_1 (CS0)	\
			Signaturerstellungseinheit ZKA TUVIT.93125.TU.12.2005 Banking Signature Card, v6.32, Type 3	\
			TUVIT.93125.TU.12.2005'
	},
	'3B FF 18 00 FF 81 31 FE 45 65 63 0D 07 63 07 64 00 0D .. .. .. .. 06 15 ..':{
		name:'Giesecke & Devrient GmbH',
		info:'ROM Mask=SDP2G330.E_1 (BES0), SWP2G370.E_1 (CS0)	\
			Init-Table=ecD6.3	\
			Signaturerstellungseinheit ZKA TUVIT.09397.TU.03.2005 Banking Signature Card, v6.31 NP, Type 3	\
			TUVIT.09397.TU.03.2005'
	},
	'3B FF 18 00 FF 81 31 FE 45 65 63 0D 07 63 07 64 00 0D 90 58 45 00 06 15 8C':{
		name:'Stadtsparkasse München electronic cash card / Geldkarte'
	},
	'3B FF 18 00 FF 81 31 FE 45 65 63 0D 07 63 07 64 00 0D 90 73 07 00 06 15 E5':{
		name:'Sparkasse Acchen HBCI Geld Karte'
	},
	'3B FF 18 00 FF 81 31 FE 45 65 63 0D 07 63 07 64 00 0D 90 74 32 00 06 15 D7':{
		name:'German HBCI-Banking Card with \'Geldkarte\' from the bank "Sparkasse Marburg-Biedenkopf"'
	},
	'3B FF 18 00 FF 81 31 FE 45 65 63 0D 07 63 07 64 00 0D 90 92 61 00 06 15 62':{
		name:'Geldkarte (Frankfurter Sparkasse, Germany)'
	},
	'3B FF 18 00 FF 81 31 FE 45 65 63 0D 08 65 07 64 00 0D .. .. .. .. 06 16 ..':{
		name:'Giesecke & Devrient GmbH',
		info:'ROM Mask=ecD6.5	\
			Init-Table=SWP3G5J0.E_1 (CS0)	\
			Signaturerstellungseinheit ZKA Banking Signature Card, v6.51	\
			TUVIT.93129.TU.03.2006'
	},
	'3B FF 18 00 FF 81 31 FE 45 65 63 0D 08 65 07 64 00 0D 91 04 90 00 06 16 0E':{
		name:'German Railway\'s (Deutsche Bahn AG) "Konzernausweis"'
	},
	'3B FF 18 00 FF 81 31 FE 45 65 63 0D 0C 76 07 64 00 0D 95 81 20 00 07 30 0F':{
		name:'Master Card Credit Card issued by WGZ bank (all german volksbank institutes use them)'
	},
	'3B FF 18 00 FF 81 31 FE 45 65 63 11 03 50 02 80 00 08 27 70 02 06 05 01 8A':{
		name:'old banking card (electronic-card / Maestro / Geldkarte) of the',
		info:'"Volksbank Gelderland eG" (around 2003)'
	},
	'3B FF 18 00 FF 81 31 FE 45 65 63 11 05 40 02 50 00 10 55 10 03 03 05 00 43':{
		name:'belongs to a banking card (electronic-card / Maestro / Geldkarte).',
		info:'the bank calls it "VR-BankCard". the banks name is "Volksbank	\
			Gelderland eG" and is part of the "Volksbanken und Raiffeisenbanken"	\
			(http://www.vb-gelderland.de/html/5/2394/rubrik/1282.html)'
	},
	'3B FF 18 00 FF 81 31 FE 45 65 63 11 06 40 02 50 00 10 .. .. .. .. 05 00 ..':{
		name:'Gemplus-mids GmbH,',
		info:'ROM Mask=ZKA 322 V5A,	\
			Init-Table=SWI1P070.E_0 (CS0),SDI1P080.E_1 (BES0),	\
			Signaturerstellungseinheit ZKASignaturkarte v5.02,	\
			TUVIT.09385.TU.09.2004'
	},
	'3B FF 18 00 FF 81 31 FE 45 65 63 11 06 40 02 50 00 10 05 50 03 10 05 00 43':{
		name:'HBCI-Karte (Bordesholmer Sparkasse, Germany)'
	},
	'3B FF 18 00 FF 81 31 FE 45 65 63 11 06 40 02 50 00 10 19 10 04 20 05 00 28':{
		name:'Stadtsparkasse München HBCI card / Geldkarte'
	},
	'3B FF 18 00 FF 81 31 FE 45 65 63 11 06 40 02 50 00 10 25 60 05 12 05 00 57':{
		name:'Geldkarte/HBCI(DDV-1) (Stadtsparkasse Vorpommern, Germany)'
	},
	'3B FF 18 00 FF 81 31 FE 45 65 63 11 06 40 02 50 00 10 27 30 02 16 05 00 06':{
		name:'GeldKarte from Sparkasse bank'
	},
	'3B FF 18 00 FF 81 31 FE 45 65 63 11 06 40 02 50 00 10 27 80 03 25 05 00 84':{
		name:'Volksbank VR-BankCard (GeldKarte)'
	},
	'3B FF 18 00 FF 81 31 FE 45 65 63 11 06 40 02 50 00 10 28 50 01 11 05 00 6D':{
		name:'HBCI Bancing Card of Sparkasse Pforzheim'
	},
	'3B FF 18 00 FF 81 31 FE 45 65 63 11 06 62 02 80 00 11 .. .. .. .. 06 13 ..':{
		name:'Giesecke & Devrient GmbH',
		info:'ROM Mask=ecD6.2,	\
			Init-Table=SDI1G280.E_1 (BES0),	\
			Signaturerstellungseinheit ZKA Banking Signature Card, v6.2b NP & 6.2f NP, Type 3	\
			TUVIT.09395.TU.01.2005'
	},
	'3B FF 18 00 FF 81 31 FE 45 65 63 11 06 62 02 80 00 11 06 60 03 04 06 13 87':{
		name:'Geldkarte (Volksbank Offenburg, Germany)'
	},
	'3B FF 18 00 FF 81 31 FE 45 65 63 11 06 62 02 80 00 11 16 50 05 17 06 13 B2':{
		name:'FinTS (BBBank Karlsruhe, Germany)'
	},
	'3B FF 18 00 FF 81 31 FE 45 65 63 11 06 62 02 80 00 11 20 90 03 09 06 13 5C':{
		name:'Geldkarte [ec, Maestro] (1822 direkt Frankfurter Sparkasse, Germany)'
	},
	'3B FF 18 00 FF 81 31 FE 45 65 63 11 06 62 02 80 00 11 43 50 01 17 06 13 E3':{
		name:'EC-Card of Sparkasse Pforzheim Calw'
	},
	'3B FF 18 00 FF 81 31 FE 45 65 63 11 07 64 02 80 00 11 .. .. .. .. 06 19 ..':{
		name:'Giesecke & Devrient GmbH',
		info:'ROM Mask=ecD6.4	\
			Init-Table=SDI2G4G0.E_4 (BES0), SWI2G4H0.E_2 (CS0)	\
			Signaturerstellungseinheit ZKA 17.01.2006 Banking Signature Card, v6.4	\
			TUVIT.93123.TU.01.2006'
	},
	'3B FF 18 00 FF 81 31 FE 45 65 63 11 08 43 02 50 00 10 .. .. .. .. 05 30 ..':{
		name:'Gemalto',
		info:'ROM Mask=ZKA 680 V5A	\
			Init-Table=SSI3P3M6E_1 (MS0)	\
			Massen-Signaturerstellungseinheit ZKA Banking Signature Card, Version 5.11M	\
			TUVIT.93148.TU.06.2007'
	},
	'3B FF 18 00 FF 81 31 FE 45 65 63 11 08 43 02 50 00 10 46 50 01 08 05 30 27':{
		name:'HBCI-Karte (Sparkasse Altmark-West, Salzwedel, Germany)'
	},
	'3B FF 18 00 FF 81 31 FE 45 65 63 11 08 43 02 50 00 10 84 70 01 04 05 30 C9':{
		name:'HBCI Card (1822 direkt Frankfurter Sparkasse, Germany) Geldkarte [ec, Maestro]'
	},
	'3B FF 18 00 FF 81 31 FE 45 65 63 11 08 66 02 80 00 11 .. .. .. .. 06 20 ..':{
		name:'Giesecke & Devrient GmbH',
		info:'ROM Mask=ecD6.6	\
			Init-Table=SDI3G6G0.E_3 (BES0), SSI3G6M0.E_2 (S0), SWI3G6H0.E_3 (CS0)	\
			Signaturerstellungseinheit ZKA Banking Signature Card, Version 6.6	\
			TUVIT.93130.TU.05.2006 - 2. Nachbestätigung'
	},
	'3B FF 18 00 FF 81 31 FE 45 65 63 11 08 66 02 80 00 11 40 50 03 18 06 20 D4':{
		name:'banking card (electronic-card / Maestro / Geldkarte). the bank+calls',
		info:'it "S-Card" or "Sparkassen-Card". the banks name is "Stadtsparkasse	\
			Duesseldorf" and is part of the "Sparkassen-Finanzgruppe" (a finance	\
			group, network of local banks).'
	},
	'3B FF 18 00 FF 81 31 FE 45 65 63 11 08 66 02 80 00 11 56 00 03 18 06 20 92':{
		name:'Geldkarte [ec, Maestro] (Sparkasse Langen-Seligenstadt, Germany)'
	},
	'3B FF 18 00 FF 81 31 FE 45 65 63 19 01 50 02 80 00 0F .. .. .. .. 05 12 ..':{
		name:'SAGEM ORGA GmbH',
		info:'ROM Mask=SecV1.5.3	\
			Init-Table=SDR0O1G0.A_B (BES0), SWR0O1H0.A_5 (CS0)	\
			Signaturerstellungseinheit ZKA SECCOS Sig v1.5.3	\
			BSI.02076.TE.12.2006'
	},
	'3B FF 18 00 FF 81 31 FE 45 65 63 1A 01 41 02 50 00 10 52 09 05 67 05 10 21':{
		name:'Maestro/Geldkarte (BBBank Karlsruhe, Germany)'
	},
	'3B FF 18 00 FF 81 31 FE 55 00 6B 02 09 02 00 01 01 01 43 4E 53 10 31 80 9F':{
		name:'Carta Nazionale dei Servizi - InfoCamere'
	},
	'3B FF 18 00 FF 81 31 FE 55 00 6B 02 09 02 00 01 01 01 44 53 44 10 31 80 92':{
		name:'Postcom S.P.A. (digital certificate)'
	},
	'3B FF 18 00 FF 81 31 FE 55 00 6B 02 09 02 00 01 11 01 43 4E 53 10 31 80 8F':{
		name:'Carta Regionale dei Servizi - Regione Lombardia'
	},
	'3B FF 18 00 FF 81 31 FE 55 00 6B 02 09 02 00 01 11 01 43 4E 53 11 31 80 8E':{
		name:'Infocamere CNS'
	},
	'3B FF 18 00 FF 81 31 FE 55 00 6B 02 09 03 00 01 11 01 43 4E 53 11 31 80 8F':{
		name:'Card description: Multiservice Card - CMCC - Arma Carabinieri (Carta Multiservizi)'
	},
	'3B FF 18 00 FF 81 31 FE 55 00 6B 02 09 03 03 01 01 01 43 4E 53 10 31 80 9D':{
		name:'Aruba CNS for Regione Toscana (IT)',
		info:'http://www.regione.toscana.it'
	},
	'3B FF 18 00 FF 81 31 FE 55 00 6B 02 09 03 03 01 01 01 44 53 44 10 31 80 90':{
		name:'Postecert (www.postecert.it) to legally sign documents'
	},
	'3B FF 18 00 FF 81 31 FE 55 00 6B 02 09 03 03 01 11 01 43 4E 53 11 31 80 8C':{
		name:'Infocert 1205* smart card',
		info:'Universita\' Degli Studi di Torino (Infocert)'
	},
	'3B FF 18 00 FF C1 0A 31 FE 55 00 6B 05 08 C8 05 01 11 01 43 4E 53 10 31 80 0C':{
		name:'Carta Regionale dei Servizi - Regione Lombardia'
	},
	'3B FF 18 00 FF C1 0A 31 FE 55 00 6B 05 08 C8 09 01 11 01 43 4E 53 10 31 80 00':{
		name:'Carta regionale dei servizi - Regione Sicilia',
		info:'http://www.regione.sicilia.it/crs/index.asp'
	},
	'3B FF 18 00 FF C1 0A 31 FE 55 00 6B 05 08 C8 0A 01 11 01 43 4E 53 10 31 80 03':{
		name:'Carta Regionale dei Servizi - Regione Lombardia'
	},
	'3B FF 18 00 FF C1 0A 31 FE 55 00 6B 05 08 C8 0C 01 11 01 43 4E 53 10 31 80 05':{
		name:'Healthcare card (TS-CNS) - Provincia Autonoma di Trento'
	},
	'3B FF 32 00 00 10 80 80 31 E0 5B 47 42 50 00 00 00 00 00 00 02 55':{
		name:'UK NatWest BT PayToView Mondex'
	},
	'3B FF 94 00 00 00 43 4D 42 5F 55 42 53 69 67 6E 30 30 30 32 15':{
		name:'UBS Access Card used for online banking with UBS in Switzerland.',
		info:'It resides in a calculator like token, that is used for a challenge	\
			response when logging in.'
	},
	'3B FF 94 00 00 40 0A 80 31 00 73 12 21 13 57 4A 33 0E 01 31 41 00':{
		name:'O2 Loop SIM card'
	},
	'3B FF 94 00 00 40 0A 80 31 00 73 12 21 13 57 4A 33 0E 02 32 41 00':{
		name:'Turkcell SIMPlus64 / Turkey'
	},
	'3B FF 94 00 00 C0 0A B1 FE 49 1F 43 80 31 E0 73 F6 21 13 57 34 36 43 41 32 30 20 68':{
		name:'Sonera UICC (Telecommunication)'
	},
	'3B FF 94 00 FF 80 B1 FE 45 1F 03 00 68 D2 76 00 00 28 FE 05 22 31 80 00 90 00 1E':{
		name:'Alice Business card (to be used in the modem supplied by an Italian provider)'
	},
	'3B FF 94 00 FF 80 B1 FE 45 1F 03 00 68 D2 76 00 00 28 FF 05 1E 31 80 00 90 00 23':{
		name:'D-Trust Signature Card (www.d-trust.net):',
		info:'- Citizencard of the People of Ulm in Germany (Bürgerkarte)	\
			- Qualified Electronic Signature Card (Qualifizierte Signaturkarte)'
	},
	'3B FF 94 00 FF C0 0A 1F 43 80 31 E0 73 36 21 13 57 4A 43 49 1C 31 30 32 1C':{
		name:'Giesecke & Devrient - UniverSIM Pegasus'
	},
	'3B FF 95 00 00 C0 0A 1F 43 80 31 E0 73 36 21 13 57 4A 33 0E 02 31 41 00 88':{
		name:'"BASE" SIM card; BASE is a german mobile phone operator, which is a brand of E-Plus, Germany.'
	},
	'3B FF 95 00 FF 40 0A 80 31 00 73 1A 21 13 57 4A 50 48 60 31 41 47':{
		name:'Vodafone 64 KB SIM with Javacard'
	},
	'3B FF 95 00 FF 40 0A 80 31 E8 73 F6 21 13 67 4A 47 48 60 31 42 00':{
		name:'Giesecke & Devrient STARSIM'
	},
	'3B FF 95 00 FF C0 0A 1F 43 80 31 E0 73 36 21 13 57 4A 33 20 07 33 41 41 1F':{
		name:'Swisscom 3G SIM card'
	},
	'3B FF 95 00 FF C0 0A 1F 43 80 31 E0 73 F6 21 13 57 4A 33 48 57 31 41 41 E5':{
		name:'MTNL 3G USIM (India)'
	},
	'3B FF 95 00 FF C0 0A 1F 43 80 31 E0 73 F6 21 13 57 4A 33 48 61 32 41 47 D6':{
		name:'GSM SIM (issued by e-plus, Germany)'
	},
	'3B FF 95 00 FF C0 0A 1F 43 80 31 E0 73 F6 21 13 57 4A 55 48 60 32 41 00 F6':{
		name:'GSM SIM from O2 Germany (UMTS ready) from 2005'
	},
	'3B FF 95 00 FF C0 0A 1F 47 80 31 E0 73 F6 21 13 57 4A 33 20 0B 31 41 41 D5':{
		name:'Telenor SIM card (Norway)'
	},
	'3B FF 96 00 FF 81 31 FE 45 65 63 0D 09 71 07 64 00 0D 00 03 54 50 07 01 81':{
		name:'Commerzbank ServiceCard / Maestro / GeldKarte / Cirrus / girocard / CashGroup / electronic cash'
	},
	'3B FF 96 00 FF 81 31 FE 45 65 63 19 01 50 02 80 00 0F 00 2B 00 46 50 11 72':{
		name:'Sparkasse Bremen Germany HBCI DDV'
	},
	'3B FF 96 00 FF 81 31 FE 45 65 63 19 01 50 02 80 00 0F 00 2F 00 25 50 11 15':{
		name:'German Postbank Giro card with electronic cash, Maestro, GeldKarte features'
	},
	'3B FF 96 00 FF C0 0A 1F 43 80 31 E0 73 36 21 13 57 4A 43 49 1C 31 30 32 1E':{
		name:'Giesecke & Devrient - UniverSIM Pegasus'
	},
	'3F 05 DC 20 FC 00 01':{
		name:'DigiCash Facility Card'
	},
	'3F 28 00 00 11 14 00 03 68 90 00':{
		name:'SIMEMU - a DIY GSM SIM card - http://simemu.cjb.net/'
	},
	'3F 2D 00 27 A0 51 82 7D 00 00 00 52 00 0C 90 00':{
		name:'Porta Moedas Multibanco (Portugeese electronic purse)'
	},
	'3F 2F 00 80 59 AF 02 01 01 30 00 00 0A 0E 83 06 9F 12':{
		name:'Gemplus GemXplore'
	},
	'3F 2F 00 80 59 AF 02 01 02 30 00 0C 0A 0E 83 1E 9F 16':{
		name:'GSM-SIM (900MHz) card of the carrier "Mannesmann Mobilfunk" for',
		info:'their network "D2-Privat" - now known as Vodafone Mobilfunk	\
			(http://www.vodafone.de/).'
	},
	'3F 2F 00 80 69 AE 02 02 01 36 00 00 0A 0E 83 3E 9F 16':{
		name:'GSM-SIM e-plus (1800MHz)'
	},
	'3F 2F 00 80 69 AF 02 04 01 36 00 02 0A 0E 83 3E 9F 16':{
		name:'GSM-SIM D2 CallYa (900MHz)'
	},
	'3F 2F 00 80 69 AF 03 07 01 59 00 00 0A 0E 83 3E 9F 16':{
		name:'Nokia SIM Ph2 16K Ver2.0'
	},
	'3F 2F 00 80 69 AF 03 07 03 52 00 00 0A 0E 83 3E 9F 16':{
		name:'GemXplore 98 V1 16K'
	},
	'3F 2F 00 80 69 AF 03 07 03 52 00 0D 0A 0E 83 3E 9F 16':{
		name:'GSM-SIM Debitel D2 (900MHz)'
	},
	'3F 2F 00 80 69 AF 03 07 03 5A 00 15 0A 0E 83 3E 9F 16':{
		name:'Virgin Mobile SIM (Gemplus)'
	},
	'3F 3D 11 00 80 67 28 50 04 02 20 00 00 83 8E 90 00':{
		name:'GSM SIM card of the Austrian provider A1'
	},
	'3F 3E 11 00 46 52 45 43 43 49 41 52 4F 53 53 41 90 00':{
		name:'Trenitalia (Italy) fidelity card "CartaFreccia" (Smartcard)'
	},
	'3F 3F 94 00 80 69 AF 03 07 01 59 00 00 0A 0E 83 3E 9F 16':{
		name:'Finnish SIM card from "Radiolinja" now "Elisa"'
	},
	'3F 65 25 .. .. 04 6C 90 .0':{
		name:'Carte Bancaire (French banking card)'
	},
	'3F 65 25 00 2B 09 62 90 00':{
		name:'Coinamatic SmartyCity smartcard'
	},
	'3F 65 25 00 2B 09 69 90 00':{
		name:'Municipal parking meter card for the City of St. John\'s, NL, Canada.',
		info:'The city\'s web site is: http://www.stjohns.ca/index.jsp'
	},
	'3F 65 25 00 2B 09 EB 90 00':{
		name:'Bull Scot 5'
	},
	'3F 65 25 00 2[2,C] 09 [F,6]9 90 00':{
		name:'Sesam Vitale (French health card)'
	},
	'3F 65 25 00 52 09 6A 90 00':{
		name:'French carte Vitale'
	},
	'3F 65 25 00 A[3,4] 09 6A 90 00':{
		name:'Sesam Vitale (French health card)'
	},
	'3F 65 25 08 22 04 68 90 00':{
		name:'France Telecom card (ex Pastel card)'
	},
	'3F 65 25 08 23 04 68 90 00':{
		name:'France Telecom card'
	},
	'3F 65 25 08 33 04 20 90 00':{
		name:'D-Trust card'
	},
	'3F 65 25 08 43 04 6C 90 00':{
		name:'CB visa La Poste France (Oberthur)',
		info:'CB visa Societe Generale France (Oberthur)'
	},
	'3F 65 25 08 63 04 6C 90 00':{
		name:'CB visa La Poste France (Oberthur)',
		info:'CB Master Carte du Crédit Mutuel'
	},
	'3F 65 25 08 65 04 6C 90 00':{
		name:'CB visa Boursorama France (Axalto)'
	},
	'3F 65 35 10 0. 04 6C 90 00':{
		name:'Postcard (Switzerland)'
	},
	'3F 65 35 64 02 04 6C 90 40':{
		name:'Postcard (Switzerland)'
	},
	'3F 67 25 00 21 20 00 0F 68 90 00':{
		name:'Smart Builder "your kit for PC/SC applications" and Bull',
		info:'http://www.cp8.bull.net/'
	},
	'3F 67 25 00 21 20 00 0F 78 90 00':{
		name:'Bank Nederlandse Gemeenten, BNG Data Services'
	},
	'3F 67 25 00 26 14 00 20 68 90 00':{
		name:'Pay-TV card from Casema Cable Television, Netherland'
	},
	'3F 67 25 00 2A 20 00 0F 68 90 00':{
		name:'Carte Grand Voyageur (SNCF: French train company)'
	},
	'3F 67 25 00 2A 20 00 40 68 9F 00':{
		name:'Swiss Cash card',
		info:'Chipknip SNS Bank (banking card)'
	},
	'3F 67 25 00 2A 20 00 41 68 90 00':{
		name:'ChipKnip'
	},
	'3F 67 25 00 2A 20 00 4[0,1] 68 90 00':{
		name:'Dutch ChipKnip, Proton',
		info:'(chip Bull CC 60 V1, Bull CC 60 V2 or Bull CC 1000)'
	},
	'3F 67 25 04 21 20 00 07 68 90 00':{
		name:'Philips TB100 (C-MOS chip)'
	},
	'3F 67 2F 04 11 20 00 00 68 90 00':{
		name:'BULL HN ITALIA 06/92 - 100.000 - 64MP',
		info:'La Sapienza - Universita\' di Roma'
	},
	'3F 69 00 00 24 AF 01 70 01 01 FF 90 00':{
		name:'French GSM SIM card (900MHz)'
	},
	'3F 6A 00 00 00 64 01 50 01 0C 82 01 01 A9':{
		name:'Credit Card café Selecta'
	},
	'3F 6C 00 00 24 A0 30 00 FF 00 00 01 00 04 90 00':{
		name:'Gemplus MCOS 16K DES Sample Card'
	},
	'3F 6C 00 00 25 A0 30 89 76 00 00 04 01 0C 90 00':{
		name:'MCOS 24k EEPROM'
	},
	'3F 6C 00 00 3C A0 30 9E 61 00 00 01 00 04 90 00':{
		name:'Gemplus - British Gas - Gascard'
	},
	'3F 6C 00 00 3C A0 30 A7 58 00 00 01 01 8C 90 00':{
		name:'Rendezvous Series 7 (D2-Mac satellite TV card)'
	},
	'3F 6D 00 00 80 31 80 65 B0 05 01 02 5E 83 00 90 00':{
		name:'Gemplus GemXpresso 211PK or 211PK-IS'
	},
	'3F 6D 00 00 80 31 80 65 B0 05 01 02 5E 92 00 90 00':{
		name:'Gemplus GemXpresso 32K'
	},
	'3F 77 18 00 00 C2 14 00 C1 68 90 00':{
		name:'Viaccess Sexview'
	},
	'3F 77 18 00 00 C2 47 40 00 68 90 00':{
		name:'Viacces card: SRG SSR idèe suisse'
	},
	'3F 77 18 00 00 C2 7A 41 02 68 90 00':{
		name:'Viacces card: SRG SSR idée suisse'
	},
	'3F 77 18 00 00 C2 7A 42 02 68 90 00':{
		name:'SCT (Via Access)'
	},
	'3F 77 18 00 00 C2 7A 43 02 68 90 00':{
		name:'DORCEL (Via Access)'
	},
	'3F 77 18 00 00 C2 7A 44 02 68 90 00':{
		name:'XXX Redlight_HD (Viaccess)'
	},
	'3F 77 18 25 00 29 14 00 62 68 90 00':{
		name:'Viaccess card'
	},
	'3F 78 12 25 01 40 B0 03 4A 50 20 48 55':{
		name:'DSS/DTV H'
	},
	'3F 78 13 25 03 40 B0 20 FF FF 4A 50 00':{
		name:'DSS/DTV P4'
	},
	'3F 7E 11 25 05 40 B0 08 00 00 4D 59 00 00 00 53 4B 0B 07':{
		name:'BSkyB Series 11 (DSS satellite TV card)'
	},
	'3F 7E 11 25 05 40 B0 08 00 00 4D 59 00 00 00 53 4B 0B 08':{
		name:'Sky Series 11 (DSS satellite TV card)'
	},
	'3F 7E 11 25 09 40 B0 01 00 00 4D 59 00 00 03 53 4B 0A 01':{
		name:'Sky Series 10 (DSS satellite TV card)'
	},
	'3F 7F 11 25 03 33 B0 09 69 FF 4A 50 70 00 00 56 54 01 00 00':{
		name:'Viasat Baltic (satellite card, NDS)'
	},
	'3F 7F 11 25 05 40 B0 0F 69 FF 4D 59 00 00 00 53 4B 0C 06 00':{
		name:'Sky Series 12 (DSS satellite TV card)'
	},
	'3F 7F 13 25 02 40 B0 0C 69 FF 4A 50 C0 00 00 52 53 00 00 00':{
		name:'Stream Italy NDS 1 (Pay TV)'
	},
	'3F 7F 13 25 03 33 B0 06 69 FF 4A 50 D0 00 00 53 59 00 00 00':{
		name:'Sky 2005/6 (DSS satellite TV card)'
	},
	'3F 7F 13 25 03 33 B0 11 69 FF 4A 50 50 00 00 49 56 01 00 00':{
		name:'Indonesia Videoguard 2 card'
	},
	'3F 7F 13 25 03 38 B0 04 FF FF 4A 50 00 00 29 48 55 .. .. ..':{
		name:'DSS/DTV HU'
	},
	'3F 7F 13 25 03 40 B0 0B 69 4C 4A 50 C0 00 00 53 59 00 00 00':{
		name:'Sky Digital (DSS satellite TV card)'
	},
	'3F 7F 13 25 05 40 B0 11 69 FF 4A 50 00 00 00 47 54 00 0C 00':{
		name:'YES DBS Israel Videoguard 090C,090D'
	},
	'3F 96 18 80 01 80 51 00 61 10 30 9F':{
		name:'Atmel/Athena T0 Inverse Convention PC/SC Compliance Test Card No. 2'
	},
	'3F EF 00 FF 81 31 .. 45 65 63':{
		name:'Debit card (Germany): ec-cash, GeldKarte(DEM), Maestro, Cirrus'
	},
	'3F FD 13 25 02 50 00 0F 33 B0 0F 69 FF 4A 50 D0 00 00 53 59 02':{
		name:'Sky Digital (DSS satellite TV card) 2009 issue'
	},
	'3F FD 13 25 02 50 80 0F .. B0 .. 69 FF 4A 50 D0 80 00 49 54 03':{
		name:'Sky (Italy) VideoGuard CAM card'
	},
	'3F FD 13 25 02 50 80 0F 33 B0 08 FF FF 4A 50 90 00 00 47 4C 01':{
		name:'Sky (Brasil) VideoGuard CAM card'
	},
	'3F FD 14 25 01 50 00 0F 33 B0 0B FF FF 4A 50 80 00 00 47 58 01':{
		name:'DirecTV card'
	},
	'3F FF 11 25 03 10 80 41 B0 06 69 FF 4A 50 70 00 00 41 5A 01 00 11':{
		name:'Astro (Pay TV) http://www.astro.com.my'
	},
	'3F FF 11 25 03 10 80 41 B0 07 69 FF 4A 50 70 00 00 50 31 01 00 11':{
		name:'Sky (Germany) VideoGuard CAM card (www.sky.de)'
	},
	'3F FF 13 25 02 50 80 0F 54 B0 03 FF FF 4A 50 80 00 00 00 00 47 4C 05':{
		name:'Sky (Brasil) VideoGuard CAM card'
	},
	'3F FF 13 25 03 10 80 33 B0 0E 69 FF 4A 50 70 00 00 49 54 02 00 00':{
		name:'Sky entitlement card'
	},
	'3F FF 13 25 0B 50 00 0F 33 B0 04 69 FF 4A 50 E0 00 00 53 35 00 00 00':{
		name:'Stream TV (IP television) decoder card, provided by stream.ru ISP in Moscow'
	},
	'3F FF 13 25 0B 50 00 0F 33 B0 04 69 FF 4A 50 E0 00 00 54 38 00 00 00':{
		name:'Stream TV (IP television) decoder card, provided by aon (Telekom Austria) TV card, contains Incorporated NDS Videoguard (TM) security system'
	},
	'3F FF 14 25 03 10 80 33 B0 10 69 FF 4A 50 70 00 00 5A 45 01 00 00':{
		name:'Norwegian DVB-C provider Get (www.get.no). NDS Videoguard security card.'
	},
	'3F FF 14 25 03 10 80 41 B0 01 69 FF 4A 50 70 00 00 5A 48 01 00 00':{
		name:'"D-Smart" NDS from Turkie'
	},
	'3F FF 14 25 03 10 80 41 B0 01 69 FF 4A 50 70 00 00 5A 4B 01 00 00':{
		name:'Pay TV, Viasat Ukraine'
	},
	'3F FF 14 25 03 10 80 41 B0 02 69 FF 4A 50 70 80 00 41 4F 01 00 14':{
		name:'Pay TV'
	},
	'3F FF 14 25 03 10 80 54 B0 01 69 FF 4A 50 70 00 00 4B 57 01 00 00':{
		name:'PayTV Card Kabel BW (www.kabelbw.de), Encryption: NDS by Videoguard, Distribution Standard: DVB-C'
	},
	'3F FF 95 00 FF 91 81 71 .. 47 00 .. 4. 4. .. .. 3. 3. 3. 20 .. 65 7. .. .. .. ..':{
		name:'Nagravision TV CAM card — http://en.wikipedia.org/wiki/Nagravision'
	},
	'3F FF 95 00 FF 91 81 71 .. 47 00 4E 43 4D 45 44 3. 30 3. 20 52 65 76 .. 3. 3. ..':{
		name:'Mediaset Premium (Italy) CAM card'
	},
	'3F FF 95 00 FF 91 81 71 64 47 00 44 4E 41 53 50 30 30 33 20 52 65 76 33 32 33 FF':{
		name:'Satellite TV Card "Via Digital" (Nagra)'
	},
	'3F FF 95 00 FF 91 81 71 A0 47 00 44 4E 41 53 50 30 31 30 20 52 65 76 41 32 30 48':{
		name:'DSS/DISH ROM10'
	},
	'3F FF 95 00 FF 91 81 71 A0 47 00 44 4E 41 53 50 30 31 30 20 52 65 76 41 32 31 49':{
		name:'PayTV card for DishNetwork Sat receiver http://www.dishnetwork.com/'
	},
	'3F FF 95 00 FF 91 81 71 A0 47 00 44 4E 41 53 50 30 31 31 20 52 65 76 42':{
		name:'NTL digial TV card (Nagravision)'
	},
	'3F FF 95 00 FF 91 81 71 A0 47 00 44 4E 41 53 50 30 31 31 20 52 65 76 42 30 36 4E':{
		name:'Telewest Broadband (Nagravision)'
	},
	'3F FF 95 00 FF 91 81 71 A0 47 00 44 4E 41 53 50 30 31 31 20 52 65 76 42 30 42 3A':{
		name:'NagraVision card for StarHub Digital Cable DVB-C Singapore'
	},
	'3F FF 95 00 FF 91 81 71 A0 47 00 44 4E 41 53 50 30 31 31 20 52 65 76 42 30 44 3C':{
		name:'NagraVision card for Virgin Media in the UK'
	},
	'3F FF 95 00 FF 91 81 71 A0 47 00 44 4E 41 53 50 31 38 30 20 4D 65 72 30 30 30 28':{
		name:'NagraVision (VG04) for Virgin Media (UK)',
		info:'NagraVision 3 for DigiTV (Romania) http://www.rcs-rds.ro/televiziune-digi-tv/satelit'
	},
	'3F FF 95 00 FF 91 81 71 FE 47 00 44 4E 41 53 50 31 31 30 20 52 65 76 41 30 31 14':{
		name:'TVA Digital - Nagra Vision ID TV-01'
	},
	'3F FF 95 00 FF 91 81 71 FE 47 00 44 4E 41 53 50 31 31 30 20 52 65 76 41 30 37 12':{
		name:'UPC Austria/UPC-Cablecom Switzerland, digital television encryption card',
		info:'http://www.upc-cablecom.ch/'
	},
	'3F FF 95 00 FF 91 81 71 FE 47 00 44 4E 41 53 50 31 31 30 20 52 65 76 41 32 32 15':{
		name:'UM01 card from German Unitymedia cable TV provider'
	},
	'3F FF 95 00 FF 91 81 71 FE 47 00 44 4E 41 53 50 31 31 30 20 52 65 76 41 34 35 14':{
		name:'Telenet N.V. HDTV Decoder Card Belgium'
	},
	'3F FF 95 00 FF 91 81 71 FE 47 00 44 4E 41 53 50 31 31 30 20 52 65 76 41 43 33 65':{
		name:'Brazilian NET Digital (Cable TV provider) - Nagra Vision "NASP110 RevA01"'
	},
	'3F FF 95 00 FF 91 81 71 FE 47 00 44 4E 41 53 50 31 34 32 20 52 65 76 47 30 32 16':{
		name:'Polsat Nagra3'
	},
	'3F FF 95 00 FF 91 81 71 FE 47 00 44 4E 41 53 50 31 34 32 20 52 65 76 47 30 34 10':{
		name:'Nagra 3 Card - Telefonica Brazil Green'
	},
	'3F FF 95 00 FF 91 81 71 FE 47 00 44 4E 41 53 50 31 34 32 20 52 65 76 47 30 36 12':{
		name:'UM02 card from German Unitymedia cable TV provider'
	},
	'3F FF 95 00 FF 91 81 71 FE 47 00 44 4E 41 53 50 31 34 32 20 52 65 76 47 43 34 63':{
		name:'HD+ card used by the satelite company astra for decryption of the HDTV channels of RTL, VOX, Sat1 and ProSieben. Nagravision V3 is used for the encryption.'
	},
	'3F FF 95 00 FF 91 81 71 FE 47 00 44 4E 41 53 50 31 38 30 20 4D 65 72 4A 30 32 0E':{
		name:'Nagra 3 Digital Plus Spain'
	},
	'3F FF 95 00 FF 91 81 71 FE 47 00 54 49 47 45 52 36 30 31 20 52 65 76 4D 38 30 13':{
		name:'Spanish pay TV card for GOLTV'
	},
	'3F FF 95 00 FF 91 81 71 FF 47 00 44 4E 41 53 50 53 30 31 20 44 73 68 36 30 39 16':{
		name:'PayTV card for DishNetwork Sat receiver http://www.dishnetwork.com/',
		info:'Cards were obsoleted in nationwide system update in 2009.'
	},
	'3F FF 95 00 FF 91 81 71 FF 47 00 54 49 47 45 52 30 30 33 20 52 65 76 32 35 30 64':{
		name:'Tivu\' Sat (Italy) CAM card www.tivu.tv'
	}
};
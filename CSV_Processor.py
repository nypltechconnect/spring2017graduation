import json


fileList = ['phase_1.csv', 'phase_2.csv']


exportDict = {}
cohortArr = []
mode = "none"
outputFolder = ""
outputFileName =""
location = ""

def processCSV(csvFile) :

	csv = open("./" + csvFile)

	global exportDict
	global cohortArr
	global mode
	global outputFolder
	global outputFileName
	global location



	def personal(str):
		personalOutput = {}
		str = str.split(",")
		personalOutput["Name"] = str[0]
		personalOutput["url"] = str[1]
		return personalOutput

	def group(str):
		groupOutput = {}
		str = str.split(",")
		groupOutput["Name"] = str[0]
		groupOutput["URL"] = str[1]
		return groupOutput

	def parseLocationNameToFileName(name):
		if name == "Mid Manhattan Library":
			return "mml"
		elif name == "SIBL":
			return 'sibl'
		elif name == "Columbus Library":
			return 'columbus'
		elif name == "Bronx Library Center":
			return 'blc'
		elif name == "Chatham Square":
			return 'chatham'
		elif name == "Countee Cullen":
			return 'cullen'
		elif name == "St. George Library Center":
			return 'stgeorge'
		else:
			print("Error with name" + str(name))
			return 'noname'


	def saveFile():
		global exportDict
		global cohortArr

		if not exportDict :
			return
		else :
			output = open(outputFolder  + outputFileName + ".js", "w")
			outputStr = json.dumps(cohortArr)
			outputStr = "projects  = " + outputStr
			output.write(outputStr)
			exportDict = {}
			cohortArr = []
			output.close()


	for line in csv:
		line = str(line)
		line = line.strip("\n")
		if line.strip(",") == "" :
			continue

		elif line.startswith("OUTPUT"):
			line = line.split(",")
			outputFolder = "./" + line[1] + "_output/"
			continue

		elif line.startswith("LOCATION"):
			if exportDict :
				cohortArr.append(exportDict)
				saveFile()

			line = line.split(',')
			location = line[1]
			outputFileName = parseLocationNameToFileName(location)
			continue

		elif line.startswith("TIME"):
			if exportDict :
				cohortArr.append(exportDict)
				exportDict = {}

			line = line.split(',')
			locationStr = location + " " + line[1]
			exportDict["Location"] = locationStr
			continue

		elif line.startswith("INSTRUCTOR"):
			line = line.split(',')
			exportDict["Instructor"] = line[1]
			continue


		elif line.startswith("INDIVIDUAL PROJECTS"):
			mode = "individual"
			continue

		elif line.startswith("NAME"):
			continue

		elif line.startswith("GROUP PROJECTS"):
			mode = "group"
			continue

		elif line.startswith("TITLE"):
			continue

		elif line.startswith("END"):
			cohortArr.append(exportDict)
			saveFile()
			break

		else:
			if mode == "individual":
				if not "Personal Projects" in exportDict :
					exportDict["Personal Projects"] = []

				exportDict["Personal Projects"].append(personal(line))

			elif mode == "group":
				if not "Group Projects" in exportDict :
					exportDict["Group Projects"] = []

				exportDict["Group Projects"].append(group(line))

			else:
				continue


for file in fileList :
	processCSV(file)
filename = "./data_萬華.json"
data = []
number = ""

# open the file for reading
filehandle = open(filename, 'r')
while True:
    # read a single line
    line = filehandle.readline()
    if not line:
        break
    for i in range(0,30):
        if line[i] == "}":
            data.append(number)
            number = ""
            break
        else:
            number += line[i]
# close the pointer to that file
filehandle.close()


for i in range(0,len(data)):
    data[i] = data[i].replace("[","")
    data[i] = data[i].replace("]","")
    nw = data[i].split(",")
    newstring = nw[1] + "," + nw[0]
    data[i] = newstring 
    data[i] = data[i].replace(" ","")
    data[i] = data[i].replace(" ","")
    data[i] = "new google.maps.LatLng(" + data[i] + "),"

for datas in data:
        print(datas)

with open("data.txt", "a") as f:
    for i in range(0,len(data)):
        f.write(data[i] + "\n")

#f = open("data.txt", "a")

    
#f.close()
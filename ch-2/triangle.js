/*

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

*/

for (let text = "#"; text.length < 8; text += "#") {
  console.log(text);
}

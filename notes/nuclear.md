Notes on Centrifuge:
  Reactors burn one fuel cell per 200 seconds
    Consumption: 1/200 cell / s
  1 U235 produces 10 fuel cells
    Consumption: 1 / 2000 U235 / s
  Kovarex process produces 1 net U235 per (50 / 0.75) seconds
  So one Kovarex Centrifuge can handle up to 30 (!) reactors
   ... or one atomic bomb every 25 minutes (lol)


# nuclear-runtime
Math: Uranium processing takes 10 uranium and produces 0.993 U238 and 0.007 U238
Kovarex turns (net) 3 U238 into 1 U235
With reprocessing, 10x fuel cell needs 13 (net) U238 + 1 U235
So from a 10k patch we get (on average):
 997 U238
   3 U235
How much kovarexing should we do? Produce 'n' U235 to reach 13:1 ratio:
997 - (n * 3) = 13 * (n + 3)
997 - 3n = 13n + 39
997 - 39 = 13n + 3n
958 = 16n
n = ~60
Thus one 10K ore patch yields
  63 U235 + 817 U238 ==> 630 fuel cells
Each fuel cell is good for 200s per reactor
 -> 35 hours in 1 reactor

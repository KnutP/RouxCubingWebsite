## Beginner tutorial

Roux (pronounced "roo") is a method for solving the Rubik's cube that relies on 
 
 [https://bit.ly/RMSWeeklyCompSummary](https://bit.ly/RMSWeeklyCompSummary)  
 

### Basics of the Cube

corners, edges, centers


<img src="/img/corners.png" width="200px" style="display: inline; margin-left: auto; margin-right: auto;">

<img src="/img/edges.png" width="200px" style="display: inline; margin-left: auto; margin-right: auto;">

<img src="/img/centers.png" width="200px" style="display: inline; margin-left: auto; margin-right: auto;">


can't just solve stickers, bc piece will be unsolved

examples


### Notation
notation info: https://ruwix.com/the-rubiks-cube/notation/

To solve the cube, we use sets of moves called "algorithms" to move pieces around how we want them. An example of a very common algorithm (so common that it even has a name) is the "Sune" algorithm:

<iframe width="250" height="380" style="width: 250px; height: 380px; overflow: hidden;" src="https://ruwix.com/widget/3d/?alg=R%20U%20R'%20U%20R%20U2%20R'&flags=showalg&pov=Ufr" scrolling="no"></iframe>

To represent turns on the cube, we use different letters for different faces. Together, these strings of letters can quickly represent any algorithm.

#### Face Turns

For face turns we use: F (Front), U (Up), R (Right), B (Back), L (Left), D (Down).

Default is a 90-degree clockwise turn

An apostrophe indicates counterclockwise

A 2 represents a double-turn (180 degrees)

<figure style="display: inline-block;">
    <iframe width="250" height="380" style="width: 250px; height: 380px; overflow: hidden;" src="https://ruwix.com/widget/3d/?alg=U&flags=showalg&pov=Ufr" scrolling="no"></iframe>
    <figcaption  width="40%" style="text-align: center;">
        U - a 90-degree clockwise rotation of the upper face
    </figcaption>
</figure>
<figure style="display: inline-block;">
    <iframe width="250" height="380" style="width: 250px; height: 380px; overflow: hidden;" src="https://ruwix.com/widget/3d/?alg=U'&flags=showalg&pov=Ufr" scrolling="no"></iframe>
    <figcaption  width="40%" style="text-align: center;">
        U' - a 90-degree clockwise rotation of the upper face
    </figcaption>
</figure>
<figure style="display: inline-block;">
    <iframe width="250" height="380" style="width: 250px; height: 380px; overflow: hidden;" src="https://ruwix.com/widget/3d/?alg=U2&flags=showalg&pov=Ufr" scrolling="no"></iframe>
    <figcaption>
        U2 - a 180-degree rotation of the upper face
    </figcaption>
</figure>





#### Slice Turns

M (Middle), E (Equatorial), S (Standing)

#### Double-Layer Turns

Double-layer turns are represented by lowercase letters for each face: f, u, r, b, l, d. 


#### Cube Rotations

x - rotate the whole cube on R
y - rotate the whole cube on U
z - rotate the whole cube on F




### Step 1: First Block

<iframe width="250" height="380" style="width: 250px; height: 380px; overflow: hidden; border: none;" src="https://ruwix.com/widget/3d/?alg=R%20U%20R'%20D2&colored=DL%20FL%20BL%20DFL%20DBL%20L/m&flags=showalg&pov=Ufl" scrolling="no"></iframe>
first block info
First Square
how to make a square - examples

### Step 2: Second Block

<iframe width="250" height="380" style="width: 250px; height: 380px; overflow: hidden; border: none;" src="https://ruwix.com/widget/3d/?alg=R%20U%20R'%20D2&colored=DL%20FL%20BL%20DFL%20DBL%20L/m%20DR%20FR%20BR%20DFR%20DBR%20R/m&flags=showalg&pov=Ufl" scrolling="no"></iframe>

second block info

### Step 3: CMLL
<iframe width="250" height="380" style="width: 250px; height: 380px; overflow: hidden; border: none;" src="https://ruwix.com/widget/3d/?alg=R%20U%20R'%20D2&colored=DL%20FL%20BL%20L/m%20DR%20FR%20BR%20R/m%20U*/c%20D*/c&flags=showalg&pov=Ufr" scrolling="no"></iframe>

sune+j-perm, links to 2-look cmll algs

### Step 4: Last Six Edges

#### 4a: Edge Orientation
recognizing bad edges, M U M', EO flowchart
#### 4b: Solving L and R Edges
solving LR
#### 4c: Solving the M-Slice
4c

### Getting Faster
roadmap, Kian's videos
How to get faster
https://www.youtube.com/watch?v=mB-y0XQiN0M&list=PLajHGvYF36nSsL1r_DqrpDY07TnJwqEpn
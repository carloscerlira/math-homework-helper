// Rich content for each topic: summary + key facts/formulas
// Keyed by courseId → topic name
export const TOPIC_CONTENT = {
  arithmetic: {
    'Counting & Place Value': {
      summary: 'Each digit\'s position (place) determines its value. Ones, tens, hundreds, thousands each represent a power of 10.',
      keyFacts: [
        'Place values (right → left): 1 · 10 · 100 · 1,000 · 10,000 · …',
        'Expanded form: 4,352 = 4,000 + 300 + 50 + 2',
        'Rounding: look at the digit to the right of the target place — ≥ 5 rounds up, < 5 rounds down',
        'To compare numbers, align digits by place value and compare from left to right',
      ],
    },
    'Addition & Subtraction': {
      summary: 'Addition combines quantities; subtraction finds the difference. Multi-digit operations use regrouping.',
      keyFacts: [
        'Commutative: a + b = b + a',
        'Associative: (a + b) + c = a + (b + c)',
        'Regrouping (carry): when a column sum ≥ 10, carry 1 to the next place',
        'Borrowing: take 10 from the next place when the top digit < bottom digit',
        'Inverse: subtraction undoes addition — if a + b = c then c − b = a',
      ],
    },
    'Multiplication & Division': {
      summary: 'Multiplication is repeated addition; division splits into equal groups. They are inverse operations.',
      keyFacts: [
        'Commutative: a × b = b × a',
        'Distributive: a × (b + c) = a×b + a×c',
        'Long division check: dividend = divisor × quotient + remainder',
        'Remainder r always satisfies 0 ≤ r < divisor',
        'Any number × 0 = 0; any number ÷ 1 = itself',
      ],
    },
    'Fractions': {
      summary: 'Fractions represent parts of a whole. The numerator counts parts; the denominator names the equal-sized parts.',
      keyFacts: [
        'a/b + c/b = (a+c)/b  (same denominator)',
        'To add unlike fractions: find the LCD, convert, then add',
        'a/b × c/d = (a×c)/(b×d)',
        'a/b ÷ c/d = a/b × d/c  (multiply by reciprocal)',
        'Equivalent fractions: multiply/divide numerator and denominator by the same number',
      ],
    },
    'Decimals & Percentages': {
      summary: 'Decimals extend place value past the ones digit. Percent means "per 100" — it\'s a ratio out of 100.',
      keyFacts: [
        'Decimal places (left → right after decimal): tenths · hundredths · thousandths',
        'To convert fraction → decimal: divide numerator by denominator',
        'percent = (part / whole) × 100',
        'x% of y = (x/100) × y',
        'To find the whole: whole = part / (percent/100)',
      ],
    },
    'Order of Operations': {
      summary: 'PEMDAS/BODMAS defines the order to evaluate expressions: Parentheses, Exponents, Multiplication/Division, Addition/Subtraction.',
      keyFacts: [
        'PEMDAS: Parentheses → Exponents → Multiply/Divide (left to right) → Add/Subtract (left to right)',
        '2 + 3 × 4 = 2 + 12 = 14  (NOT 5 × 4 = 20)',
        'Nested parentheses: work from the innermost outward',
        'Multiplication and division have equal priority — evaluate left to right',
        'Addition and subtraction have equal priority — evaluate left to right',
      ],
    },
  },

  'basic-geometry': {
    'Shapes & Figures': {
      summary: 'Geometry begins with recognizing properties of 2D and 3D shapes, angle types, and line relationships.',
      keyFacts: [
        'Polygon interior angle sum = (n − 2) × 180°',
        'Right angle = 90°, acute < 90°, obtuse 90°–180°',
        'Parallel lines: same direction, never intersect (symbol: ∥)',
        'Perpendicular lines: intersect at 90° (symbol: ⊥)',
        'Line of symmetry: divides a figure into two mirror-image halves',
      ],
    },
    'Perimeter & Area': {
      summary: 'Perimeter is the total boundary length; area measures the surface enclosed by a shape.',
      keyFacts: [
        'Rectangle: P = 2(l + w),  A = l × w',
        'Triangle: P = a + b + c,  A = ½ × base × height',
        'Circle: Circumference = 2πr,  Area = πr²  (π ≈ 3.14159)',
        'Square: P = 4s,  A = s²',
        'Composite figures: split into simpler shapes, compute each area, then add',
      ],
    },
    'Measurement': {
      summary: 'Measurement assigns numerical values to lengths, weights, volumes, and time using standard units.',
      keyFacts: [
        '1 foot = 12 inches; 1 yard = 3 feet; 1 mile = 5,280 feet',
        '1 m = 100 cm; 1 km = 1,000 m',
        'To convert: multiply by the conversion factor (or divide if going the other way)',
        'Area is measured in square units (cm², m², ft²)',
        'Volume is measured in cubic units (cm³, m³) or capacity units (L, mL)',
      ],
    },
  },

  'pre-algebra': {
    'Integers & Number Properties': {
      summary: 'Integers include all whole numbers and their negatives. The number line visualizes magnitude and direction.',
      keyFacts: [
        '|a| = distance from 0; |a| ≥ 0 always',
        'Adding negatives: a + (−b) = a − b',
        'Multiplying signs: (−)(−) = +,  (−)(+) = −',
        'GCF(a, b): largest factor dividing both; found via prime factorization',
        'LCM(a, b) = (a × b) / GCF(a, b)',
      ],
    },
    'Ratios & Proportions': {
      summary: 'A ratio compares two quantities. A proportion states that two ratios are equal.',
      keyFacts: [
        'Ratio a:b = a/b',
        'Unit rate: ratio with denominator 1 (e.g., 60 miles per 1 hour)',
        'Cross-multiplication: a/b = c/d ⟹ a×d = b×c',
        'Percent change = (new − old)/old × 100%',
        'Simple interest: I = P×r×t',
      ],
    },
    'Variables & Expressions': {
      summary: 'Algebra uses letters (variables) to represent unknown or changing quantities in expressions.',
      keyFacts: [
        'An expression has terms: constants, variables, and their products',
        'Like terms share the same variable(s) and exponent(s)',
        'Distributive property: a(b + c) = ab + ac',
        'To evaluate: substitute the given value and simplify',
        'Coefficient: the numerical factor of a variable term (e.g., 3 in 3x)',
      ],
    },
    'Equations & Inequalities': {
      summary: 'An equation states two expressions are equal; solving isolates the variable using inverse operations.',
      keyFacts: [
        'Balance principle: whatever you do to one side, do to the other',
        'Inverse of addition is subtraction; inverse of multiplication is division',
        'Solution set of x > a: all numbers strictly greater than a (open circle on number line)',
        'Solution set of x ≥ a: all numbers ≥ a (closed circle on number line)',
        'Multiplying/dividing an inequality by a negative number FLIPS the inequality sign',
      ],
    },
    'Geometry & Measurement': {
      summary: 'Geometric formulas relate dimensions to perimeter, area, surface area, and volume.',
      keyFacts: [
        'Triangle angle sum = 180°',
        'Pythagorean theorem: a² + b² = c² (right triangles only)',
        'Volume of a rectangular prism = l × w × h',
        'Volume of a cylinder = πr²h',
        'Surface area of a rectangular prism = 2(lw + lh + wh)',
      ],
    },
    'Statistics & Probability': {
      summary: 'Statistics summarizes data sets; probability measures the likelihood of events.',
      keyFacts: [
        'Mean = sum of values / number of values',
        'Median = middle value when sorted (average of two middle values for even count)',
        'Mode = most frequent value',
        'Range = max − min',
        'P(event) = favorable outcomes / total equally-likely outcomes; 0 ≤ P ≤ 1',
      ],
    },
  },

  'middle-geometry': {
    'Angles & Lines': {
      summary: 'Angle relationships and parallel line theorems are the building blocks of geometric proof.',
      keyFacts: [
        'Vertical angles (across an intersection) are always equal',
        'Supplementary angles sum to 180°; complementary sum to 90°',
        'Corresponding angles (parallel lines + transversal) are equal',
        'Alternate interior angles (parallel lines) are equal',
        'Co-interior (same-side interior) angles sum to 180°',
      ],
    },
    'Triangles & Polygons': {
      summary: 'Triangle and polygon properties form the foundation for geometric reasoning and proof.',
      keyFacts: [
        'Triangle angle sum = 180°',
        'Exterior angle = sum of the two non-adjacent interior angles',
        'Interior angle sum of n-gon = (n − 2) × 180°',
        'Similar figures: same shape, proportional sides, equal angles',
        'Scale factor k scales all lengths by k and areas by k²',
      ],
    },
    'Coordinate Geometry': {
      summary: 'The coordinate plane lets us measure distances, find midpoints, and graph relationships algebraically.',
      keyFacts: [
        'Distance: d = √[(x₂−x₁)² + (y₂−y₁)²]',
        'Midpoint: M = ((x₁+x₂)/2, (y₁+y₂)/2)',
        'Slope: m = (y₂−y₁)/(x₂−x₁)',
        'Slope-intercept form: y = mx + b',
        'Horizontal lines have slope 0; vertical lines have undefined slope',
      ],
    },
    'Transformations': {
      summary: 'Transformations move or resize figures. Rigid motions (translations, reflections, rotations) preserve size and shape.',
      keyFacts: [
        'Translation: shift (x, y) → (x+a, y+b)',
        'Reflection over x-axis: (x, y) → (x, −y)',
        'Reflection over y-axis: (x, y) → (−x, y)',
        'Rotation 90° CW about origin: (x, y) → (y, −x)',
        'Dilation by k from origin: (x, y) → (kx, ky)',
      ],
    },
  },

  algebra1: {
    'Linear Equations & Inequalities': {
      summary: 'A linear equation has degree 1 — the graph is a straight line. Solve by isolating the variable using inverse operations.',
      keyFacts: [
        'Solve ax + b = c: subtract b, then divide by a → x = (c−b)/a',
        'Absolute value: |x| = a has solutions x = a and x = −a',
        '|x| < a means −a < x < a',
        '|x| > a means x > a or x < −a',
        'Compound AND: both conditions must hold; OR: at least one must hold',
      ],
    },
    'Functions & Relations': {
      summary: 'A function assigns exactly one output to each input. Function notation f(x) names the output for input x.',
      keyFacts: [
        'Vertical line test: a graph is a function iff every vertical line hits it at most once',
        'Domain: set of valid inputs; Range: set of resulting outputs',
        'f(x) notation: f(3) means substitute x = 3 and evaluate',
        'Even function: f(−x) = f(x) — symmetric about y-axis',
        'Odd function: f(−x) = −f(x) — symmetric about origin',
      ],
    },
    'Linear Functions & Graphing': {
      summary: 'A linear function has a constant rate of change (slope). Its graph is a straight line.',
      keyFacts: [
        'Slope m = rise/run = (y₂−y₁)/(x₂−x₁)',
        'Slope-intercept form: y = mx + b  (m = slope, b = y-intercept)',
        'Point-slope form: y − y₁ = m(x − x₁)',
        'Parallel lines: equal slopes (m₁ = m₂)',
        'Perpendicular lines: slopes are negative reciprocals (m₁ × m₂ = −1)',
      ],
    },
    'Systems of Equations': {
      summary: 'A system of equations is solved by finding the point(s) satisfying all equations simultaneously.',
      keyFacts: [
        'Substitution: solve one equation for a variable, substitute into the other',
        'Elimination: add/subtract equations to cancel a variable',
        'One solution: lines intersect at one point',
        'No solution: parallel lines (same slope, different y-intercepts)',
        'Infinite solutions: same line (identical equations)',
      ],
    },
    'Exponents & Polynomials': {
      summary: 'Exponent laws simplify expressions with powers. Polynomials are sums of terms with whole-number exponents.',
      keyFacts: [
        'aᵐ × aⁿ = aᵐ⁺ⁿ,  aᵐ ÷ aⁿ = aᵐ⁻ⁿ,  (aᵐ)ⁿ = aᵐⁿ',
        'a⁰ = 1,  a⁻ⁿ = 1/aⁿ',
        'Scientific notation: a × 10ⁿ  where 1 ≤ a < 10',
        'FOIL: (a+b)(c+d) = ac + ad + bc + bd',
        'Difference of squares: a² − b² = (a+b)(a−b)',
      ],
    },
    'Factoring': {
      summary: 'Factoring rewrites a polynomial as a product of simpler polynomials — the reverse of expanding.',
      keyFacts: [
        'Always factor out the GCF first',
        'Trinomial x² + bx + c = (x + p)(x + q) where p+q = b and p·q = c',
        'AC method (a≠1): multiply a×c, find factors that add to b, split and group',
        'Difference of squares: a² − b² = (a+b)(a−b)',
        'Sum/difference of cubes: a³ ± b³ = (a ± b)(a² ∓ ab + b²)',
      ],
    },
    'Quadratic Equations': {
      summary: 'Quadratic equations have degree 2. They can have 0, 1, or 2 real solutions.',
      keyFacts: [
        'Quadratic formula: x = (−b ± √(b²−4ac)) / 2a',
        'Discriminant Δ = b²−4ac: Δ > 0 → 2 real roots; Δ = 0 → 1 repeated root; Δ < 0 → no real roots',
        'Vertex: x = −b/(2a), substitute back to find y',
        'Vertex form: y = a(x − h)² + k, vertex at (h, k)',
        'Parabola opens up if a > 0, down if a < 0',
      ],
    },
    'Radicals & Rational Exponents': {
      summary: 'Radicals and rational exponents are two notations for the same operation: taking roots.',
      keyFacts: [
        'a^(1/n) = ⁿ√a,  a^(m/n) = (ⁿ√a)ᵐ = ⁿ√(aᵐ)',
        '√(ab) = √a × √b  (product rule)',
        '√(a/b) = √a / √b  (quotient rule)',
        'Rationalize: multiply numerator and denominator by the conjugate or radical',
        'Check solutions to radical equations — extraneous solutions may arise',
      ],
    },
  },

  geometry: {
    'Foundations of Geometry': {
      summary: 'Geometric proofs build from undefined terms (point, line, plane) and postulates to derive theorems.',
      keyFacts: [
        'Two points determine exactly one line',
        'Supplementary angles: sum = 180°; Complementary: sum = 90°',
        'Vertical angles (formed by two intersecting lines) are always equal',
        'Transversal crossing parallel lines: corresponding angles equal; alternate interior angles equal; co-interior angles supplementary',
        'Two-column proof: statements in one column, reasons (postulates/theorems) in the other',
      ],
    },
    'Triangles': {
      summary: 'Triangle congruence and similarity are fundamental to geometric proof and measurement.',
      keyFacts: [
        'Interior angle sum = 180°',
        'Exterior angle = sum of the two non-adjacent interior angles',
        'Congruence shortcuts: SSS, SAS, ASA, AAS, HL (right triangles)',
        'Similarity: AA sufficient; corresponding sides proportional',
        'Pythagorean theorem: a² + b² = c² (right triangles); converse also holds',
      ],
    },
    'Quadrilaterals & Polygons': {
      summary: 'Quadrilaterals are four-sided polygons with special subtypes defined by their parallel sides and angle properties.',
      keyFacts: [
        'Parallelogram: opposite sides parallel and equal; opposite angles equal; diagonals bisect each other',
        'Rectangle: parallelogram with right angles; diagonals equal',
        'Rhombus: parallelogram with equal sides; diagonals perpendicular bisectors of each other',
        'Trapezoid: exactly one pair of parallel sides; midsegment = average of bases',
        'Interior angle sum of n-gon = (n − 2) × 180°',
      ],
    },
    'Circles': {
      summary: 'Circle theorems relate central angles, inscribed angles, and the lengths of chords, arcs, tangents, and secants.',
      keyFacts: [
        'Inscribed angle = ½ × intercepted arc',
        'Central angle = intercepted arc (in degrees)',
        'Arc length = (θ/360) × 2πr  (θ in degrees)',
        'Sector area = (θ/360) × πr²',
        'Tangent-radius: tangent is perpendicular to radius at point of tangency',
        'Equation of circle: (x − h)² + (y − k)² = r²',
      ],
    },
    'Area, Perimeter & Volume': {
      summary: 'Formulas relate geometric dimensions to perimeter, area, surface area, and volume of common shapes.',
      keyFacts: [
        'Triangle: A = ½bh;  Regular polygon: A = ½ × perimeter × apothem',
        'Cylinder: SA = 2πr² + 2πrh,  V = πr²h',
        'Cone: SA = πr² + πrl (l = slant height),  V = ⅓πr²h',
        'Sphere: SA = 4πr²,  V = (4/3)πr³',
        'Similar solids with ratio k: surface areas ratio k², volumes ratio k³',
      ],
    },
    'Right Triangles & Trigonometry': {
      summary: 'Trigonometric ratios relate side lengths to angles in right triangles. The unit circle extends these to any angle.',
      keyFacts: [
        'sin θ = opposite/hypotenuse,  cos θ = adjacent/hypotenuse,  tan θ = opposite/adjacent',
        'SOH-CAH-TOA mnemonic',
        '45-45-90 triangle sides: 1 : 1 : √2',
        '30-60-90 triangle sides: 1 : √3 : 2',
        'Inverse trig: θ = sin⁻¹(ratio) finds the angle from the ratio',
      ],
    },
    'Coordinate Geometry': {
      summary: 'Coordinate geometry proves geometric facts using algebraic tools — distance, midpoint, and slope.',
      keyFacts: [
        'Distance: d = √[(x₂−x₁)² + (y₂−y₁)²]',
        'Midpoint: ((x₁+x₂)/2, (y₁+y₂)/2)',
        'Slope of a line through (x₁,y₁) and (x₂,y₂): m = (y₂−y₁)/(x₂−x₁)',
        'Parallel lines have equal slopes; perpendicular lines have slopes m₁m₂ = −1',
        'Section formula (dividing in ratio m:n): ((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n))',
      ],
    },
    'Transformations': {
      summary: 'Transformations map figures to new positions. Isometries preserve shape and size; dilations scale uniformly.',
      keyFacts: [
        'Translation (a, b): (x, y) → (x+a, y+b)',
        'Reflection over x-axis: (x, y) → (x, −y)',
        'Reflection over y-axis: (x, y) → (−x, y)',
        'Rotation 90° CCW: (x, y) → (−y, x)',
        'Dilation factor k from origin: (x, y) → (kx, ky)',
      ],
    },
  },

  algebra2: {
    'Complex Numbers': {
      summary: 'Complex numbers extend the real number system by defining i = √(−1), allowing square roots of negatives.',
      keyFacts: [
        'i = √(−1),  i² = −1,  i³ = −i,  i⁴ = 1  (cycle of 4)',
        'Standard form: a + bi  (a = real part, b = imaginary part)',
        '(a+bi)(a−bi) = a² + b²  (conjugate pairs produce reals)',
        'Modulus: |a+bi| = √(a²+b²)',
        'Complex roots come in conjugate pairs for polynomials with real coefficients',
      ],
    },
    'Polynomial Functions': {
      summary: 'Polynomial functions are defined by their degree, leading coefficient, and zeros, which shape their graph.',
      keyFacts: [
        'Degree n polynomial has at most n real roots and n−1 turning points',
        'Remainder theorem: f(c) = remainder when f(x) is divided by (x−c)',
        'Factor theorem: (x−c) is a factor of f(x) iff f(c) = 0',
        'Rational root theorem: rational roots are ±(factor of constant term)/(factor of leading coefficient)',
        'Fundamental theorem of algebra: every degree-n polynomial has exactly n roots (counting multiplicity, over ℂ)',
      ],
    },
    'Rational Functions': {
      summary: 'Rational functions are ratios of polynomials. Their graphs have asymptotes and holes.',
      keyFacts: [
        'Vertical asymptote at x = a if denominator = 0 but numerator ≠ 0 at a',
        'Hole at x = a if (x−a) cancels from both numerator and denominator',
        'Horizontal asymptote: compare degrees of numerator (m) and denominator (n)',
        '  m < n → y = 0;  m = n → y = leading coefficients ratio;  m > n → oblique asymptote',
        'Extraneous solutions: values that cause denominator = 0 after clearing fractions',
      ],
    },
    'Exponential & Logarithmic Functions': {
      summary: 'Exponentials and logarithms are inverse functions. They model growth, decay, and scales.',
      keyFacts: [
        'logₐ(xy) = logₐx + logₐy',
        'logₐ(x/y) = logₐx − logₐy',
        'logₐ(xⁿ) = n·logₐx',
        'Change of base: logₐx = ln(x)/ln(a)',
        'Compound interest: A = P(1 + r/n)^(nt);  Continuous: A = Peʳᵗ',
      ],
    },
    'Conic Sections': {
      summary: 'Conic sections are curves formed by slicing a cone: parabola, circle, ellipse, and hyperbola.',
      keyFacts: [
        'Circle: (x−h)² + (y−k)² = r²  (center (h,k), radius r)',
        'Parabola: y = a(x−h)² + k  (vertex (h,k), opens up if a>0)',
        'Ellipse: (x−h)²/a² + (y−k)²/b² = 1  (a>b: horizontal major axis)',
        'Hyperbola: (x−h)²/a² − (y−k)²/b² = 1  (opens left/right)',
        'Standard form requires completing the square when given general form Ax²+Cy²+…',
      ],
    },
    'Sequences & Series': {
      summary: 'Sequences are ordered lists; series are their sums. Arithmetic sequences grow linearly; geometric sequences grow exponentially.',
      keyFacts: [
        'Arithmetic: aₙ = a₁ + (n−1)d,  Sₙ = n(a₁+aₙ)/2',
        'Geometric: aₙ = a₁·rⁿ⁻¹,  Sₙ = a₁(1−rⁿ)/(1−r)',
        'Infinite geometric series converges iff |r| < 1: S∞ = a₁/(1−r)',
        'Sigma notation: Σᵢ₌₁ⁿ f(i) means add f(i) for i = 1, 2, …, n',
        'Binomial theorem: (a+b)ⁿ = Σ C(n,k) aⁿ⁻ᵏ bᵏ',
      ],
    },
    'Matrices': {
      summary: 'Matrices organize data in rows and columns and can represent linear systems and transformations.',
      keyFacts: [
        'Matrix multiplication: (AB)ᵢⱼ = row i of A · column j of B; requires inner dimensions to match',
        'det([[a,b],[c,d]]) = ad − bc',
        'A matrix is invertible iff det ≠ 0',
        'A⁻¹ = (1/det) × [[d,−b],[−c,a]] for 2×2',
        'AX = B → X = A⁻¹B  (if A is invertible)',
      ],
    },
  },

  trigonometry: {
    'Right Triangle Trigonometry': {
      summary: 'The six trig ratios relate angles to side-length ratios in right triangles.',
      keyFacts: [
        'sin θ = opp/hyp,  cos θ = adj/hyp,  tan θ = opp/adj',
        'Reciprocals: csc θ = 1/sin θ,  sec θ = 1/cos θ,  cot θ = 1/tan θ',
        'Co-function: sin θ = cos(90°−θ),  tan θ = cot(90°−θ)',
        'Inverse: θ = sin⁻¹(v) gives angle whose sine is v; domain restrictions apply',
        'Angle of elevation: measured upward from horizontal; angle of depression: downward',
      ],
    },
    'The Unit Circle': {
      summary: 'The unit circle (radius 1, centered at origin) defines trig functions for all real angles.',
      keyFacts: [
        '1 radian = 180°/π ≈ 57.3°;  π radians = 180°',
        'Arc length s = rθ  (θ in radians)',
        'Unit circle: (cos θ, sin θ) is the point at angle θ from positive x-axis',
        'Key values: sin 0=0, sin π/6=½, sin π/4=√2/2, sin π/3=√3/2, sin π/2=1',
        'Reference angle: acute angle between terminal side and x-axis',
      ],
    },
    'Graphs of Trig Functions': {
      summary: 'Trig functions are periodic. Amplitude, period, phase shift, and vertical shift transform the basic graphs.',
      keyFacts: [
        'y = A sin(Bx + C) + D:  amplitude |A|, period 2π/|B|, phase shift −C/B, vertical shift D',
        'sin and cos have period 2π; tan and cot have period π',
        'sin and cos are bounded between −1 and 1',
        'tan is undefined at x = π/2 + nπ (vertical asymptotes)',
        'csc and sec have the same period as sin and cos (2π)',
      ],
    },
    'Trigonometric Identities': {
      summary: 'Trig identities are equations true for all valid values of the variable. They\'re used to simplify and solve equations.',
      keyFacts: [
        'Pythagorean: sin²x + cos²x = 1  →  1 + tan²x = sec²x  →  1 + cot²x = csc²x',
        'Sum formulas: sin(A±B) = sinA cosB ± cosA sinB',
        'Double-angle: sin(2x) = 2 sin x cos x;  cos(2x) = cos²x − sin²x = 1−2sin²x',
        'Half-angle: sin²x = (1−cos 2x)/2;  cos²x = (1+cos 2x)/2',
        'To verify an identity: work on one side only until it matches the other',
      ],
    },
    'Solving Trigonometric Equations': {
      summary: 'Trig equations may have infinitely many solutions. The general solution adds the period to each particular solution.',
      keyFacts: [
        'Basic: sin x = a has solutions x = sin⁻¹(a) + 2nπ and x = π − sin⁻¹(a) + 2nπ',
        'cos x = a: x = ±cos⁻¹(a) + 2nπ',
        'tan x = a: x = tan⁻¹(a) + nπ',
        'Restrict to [0, 2π) first; use the reference angle and correct quadrant',
        'Use identities to reduce to a single trig function when multiple appear',
      ],
    },
    'Oblique Triangles': {
      summary: 'Law of Sines and Law of Cosines solve any triangle given enough information about sides and angles.',
      keyFacts: [
        'Law of Sines: a/sin A = b/sin B = c/sin C',
        'Law of Cosines: a² = b² + c² − 2bc cos A',
        'Ambiguous case (SSA): 0, 1, or 2 triangles possible — check by comparing given side to altitude',
        'Area = ½ab sin C',
        "Heron's formula: A = √[s(s−a)(s−b)(s−c)] where s = (a+b+c)/2",
      ],
    },
    'Vectors & Polar Coordinates': {
      summary: 'Vectors have both magnitude and direction. Polar coordinates describe position by distance and angle.',
      keyFacts: [
        'Magnitude: |v| = √(a²+b²) for v = ⟨a, b⟩',
        'Dot product: a·b = a₁b₁ + a₂b₂ = |a||b|cos θ',
        'Polar: x = r cos θ, y = r sin θ;  r = √(x²+y²), θ = arctan(y/x)',
        "DeMoivre's theorem: (r cis θ)ⁿ = rⁿ cis(nθ)  (where cis θ = cos θ + i sin θ)",
        'nth roots of unity: n complex numbers equally spaced on the unit circle',
      ],
    },
  },

  'stats-hs': {
    'Descriptive Statistics': {
      summary: 'Descriptive statistics summarize and describe the key features of a data set.',
      keyFacts: [
        'Mean = Σxᵢ/n;  sensitive to outliers',
        'Median = middle value (sorted); resistant to outliers',
        'IQR = Q3 − Q1  (middle 50% of data)',
        'Variance σ² = Σ(xᵢ−x̄)²/n;  Standard deviation σ = √(variance)',
        'Outlier: value more than 1.5 × IQR below Q1 or above Q3',
      ],
    },
    'Counting & Probability': {
      summary: 'Probability quantifies uncertainty. Counting methods enumerate possible outcomes.',
      keyFacts: [
        'P(A) = favorable outcomes / total outcomes  (equally likely)',
        'Addition rule: P(A∪B) = P(A) + P(B) − P(A∩B)',
        'Multiplication rule (independent): P(A∩B) = P(A)·P(B)',
        'Conditional: P(A|B) = P(A∩B)/P(B)',
        'Permutations: nPr = n!/(n−r)!;  Combinations: nCr = n!/[r!(n−r)!]',
      ],
    },
    'Probability Distributions': {
      summary: 'A probability distribution describes how probability is spread over the values of a random variable.',
      keyFacts: [
        'Binomial: P(X=k) = C(n,k)·pᵏ·(1−p)ⁿ⁻ᵏ;  E[X] = np;  Var[X] = np(1−p)',
        'Normal distribution: bell-shaped, symmetric about mean μ',
        'Empirical rule: 68% within 1σ, 95% within 2σ, 99.7% within 3σ',
        'Z-score: z = (x − μ)/σ — measures how many standard deviations from the mean',
        'Standard normal N(0,1): use z-table to find areas/probabilities',
      ],
    },
    'Statistical Inference': {
      summary: 'Inference uses sample data to draw conclusions about a population, with quantified uncertainty.',
      keyFacts: [
        'Central Limit Theorem: sample mean x̄ is approximately N(μ, σ²/n) for large n',
        'Confidence interval: estimate ± margin of error',
        'p-value: probability of observing results this extreme if H₀ is true',
        'Reject H₀ if p-value < significance level α (typically 0.05)',
        'Type I error: rejecting a true H₀ (false positive);  Type II: failing to reject a false H₀',
      ],
    },
    'Regression & Correlation': {
      summary: 'Regression fits a line (or curve) to data. Correlation measures the linear association strength.',
      keyFacts: [
        'Pearson r: −1 ≤ r ≤ 1;  r = ±1 → perfect linear;  r = 0 → no linear association',
        'Least-squares regression line: ŷ = b₀ + b₁x,  where b₁ = r·(sᵧ/sₓ)',
        'Residual = observed − predicted = y − ŷ',
        'R² = r²: proportion of variance in y explained by x',
        'Correlation ≠ causation; extrapolation beyond the data range is risky',
      ],
    },
  },

  precalc: {
    'Functions Deep Dive': {
      summary: 'Function operations, composition, and inverses build the toolkit for analyzing complex relationships.',
      keyFacts: [
        'Composition: (f∘g)(x) = f(g(x)); domain = inputs x where g(x) is in domain of f',
        'Inverse f⁻¹: f(f⁻¹(x)) = x; found by swapping x and y and solving for y',
        'f has an inverse iff it is one-to-one (passes horizontal line test)',
        'Vertical stretch by a: y → ay;  Horizontal compress by a: x → x/a',
        'To reflect over y = x (inverse): swap x and y coordinates',
      ],
    },
    'Polynomial & Rational Functions': {
      summary: 'Polynomials and rational functions are analyzed by their roots, behavior at infinity, and discontinuities.',
      keyFacts: [
        'End behavior: determined by leading term aₙxⁿ',
        'Multiplicity: root of even multiplicity → graph touches x-axis; odd → crosses',
        'Partial fractions decompose A/(x−a)(x−b) into A/(x−a) + B/(x−b)',
        'Sign chart: test a value in each interval between zeros to determine sign',
        'Polynomial inequality: solve f(x) > 0 using sign chart after factoring',
      ],
    },
    'Exponential & Logarithmic': {
      summary: 'Exponential and log functions are inverses. They model natural growth, decay, pH, earthquakes, and more.',
      keyFacts: [
        'eˣ and ln(x) are inverse: e^(ln x) = x and ln(eˣ) = x',
        'ln(xy) = ln x + ln y;  ln(x/y) = ln x − ln y;  ln(xⁿ) = n ln x',
        'Exponential decay: y = Ae^(−kt),  k > 0',
        'Doubling time: t = ln(2)/k;  Half-life: t = ln(2)/k',
        'Logistic model: P(t) = L / (1 + Ae^(−bt)) — bounded growth',
      ],
    },
    'Trigonometry Review': {
      summary: 'Mastering the unit circle and identities is essential before calculus.',
      keyFacts: [
        'Polar form of complex: z = r(cos θ + i sin θ) = re^(iθ)',
        'Parametric: x = f(t), y = g(t) — traces a curve as t varies',
        'To eliminate parameter: solve for t from x = f(t), substitute into y = g(t)',
        'Inverse trig domains: sin⁻¹: [−π/2, π/2]; cos⁻¹: [0, π]; tan⁻¹: (−π/2, π/2)',
        'All 6 trig functions from (cos θ, sin θ) on unit circle',
      ],
    },
    'Sequences, Series & Limits': {
      summary: 'Limits formalize the notion of a value a function approaches, bridging algebra and calculus.',
      keyFacts: [
        'lim(x→a) f(x) = L means f(x) gets arbitrarily close to L as x approaches a',
        'Limit laws: lim of sum = sum of limits (if both exist)',
        'lim(x→∞) 1/x = 0;  lim(x→∞) c = c',
        'One-sided: lim from left (x→a⁻) and right (x→a⁺); limit exists iff both equal',
        'Geometric series converges iff |r| < 1: S = a/(1−r)',
      ],
    },
  },

  calc1: {
    'Limits & Continuity': {
      summary: 'Limits describe a function\'s behavior as its input approaches a value — the foundation of all calculus.',
      keyFacts: [
        'lim(x→a) f(x) = L iff the left-hand and right-hand limits both equal L',
        'Limit laws: lim[f(x)+g(x)] = lim f + lim g  (if both exist)',
        'Continuity at a: f(a) defined, lim exists, and lim = f(a)',
        'IVT: if f is continuous on [a,b] and N is between f(a) and f(b), then f(c)=N for some c ∈ (a,b)',
        'Squeeze theorem: g(x) ≤ f(x) ≤ h(x) and g,h both → L implies f → L',
      ],
    },
    'The Derivative': {
      summary: 'The derivative measures the instantaneous rate of change. It equals the slope of the tangent line.',
      keyFacts: [
        'Definition: f\'(x) = lim(h→0) [f(x+h)−f(x)] / h',
        'Power rule: d/dx(xⁿ) = n·xⁿ⁻¹',
        'Product rule: (fg)\' = f\'g + fg\'',
        'Quotient rule: (f/g)\' = (f\'g − fg\')/g²',
        'Chain rule: d/dx[f(g(x))] = f\'(g(x))·g\'(x)',
      ],
    },
    'Derivatives of Special Functions': {
      summary: 'Standard derivative formulas for trig, exponential, and log functions are used constantly in calculus.',
      keyFacts: [
        'd/dx(sin x) = cos x;  d/dx(cos x) = −sin x;  d/dx(tan x) = sec²x',
        'd/dx(eˣ) = eˣ;  d/dx(aˣ) = aˣ ln a',
        'd/dx(ln x) = 1/x;  d/dx(logₐx) = 1/(x ln a)',
        'd/dx(sin⁻¹x) = 1/√(1−x²);  d/dx(tan⁻¹x) = 1/(1+x²)',
        'Logarithmic differentiation: take ln of both sides when function is a product of powers',
      ],
    },
    'Applications of Derivatives': {
      summary: 'Derivatives reveal function behavior: increasing/decreasing, concavity, extrema, and optimal values.',
      keyFacts: [
        'f\'(x) > 0 → increasing;  f\'(x) < 0 → decreasing',
        'Critical point: f\'(c) = 0 or undefined; candidates for local extrema',
        'First derivative test: sign change of f\' at c determines max/min',
        'Second derivative test: f\'\'(c) > 0 → local min;  f\'\'(c) < 0 → local max',
        "L'Hôpital's rule: lim f/g = lim f'/g' when 0/0 or ∞/∞ form",
      ],
    },
    'Integration': {
      summary: 'The definite integral measures net signed area. The Fundamental Theorem links integration and differentiation.',
      keyFacts: [
        'FTC Part 1: d/dx ∫_a^x f(t) dt = f(x)',
        'FTC Part 2: ∫_a^b f(x) dx = F(b) − F(a)  (F is any antiderivative)',
        'Power rule: ∫xⁿ dx = xⁿ⁺¹/(n+1) + C  (n ≠ −1)',
        'u-substitution: let u = g(x), du = g\'(x) dx; transforms ∫f(g(x))g\'(x)dx into ∫f(u)du',
        '∫_a^a f dx = 0;  ∫_a^b f dx = −∫_b^a f dx',
      ],
    },
  },

  calc2: {
    'Advanced Integration Techniques': {
      summary: 'Various techniques extend our integration toolkit beyond basic rules to handle complex integrands.',
      keyFacts: [
        'Integration by parts: ∫u dv = uv − ∫v du  (choose u = LIATE: Log, Inverse, Alg, Trig, Exp)',
        'Trig substitution: √(a²−x²) → x=a sinθ;  √(a²+x²) → x=a tanθ;  √(x²−a²) → x=a secθ',
        'Partial fractions: decompose into simpler fractions whose integrals are ln or arctan',
        'Improper integral ∫_a^∞ f dx = lim(t→∞) ∫_a^t f dx',
        'Comparison test: 0 ≤ f ≤ g; if ∫g converges then ∫f converges',
      ],
    },
    'Applications of Integration': {
      summary: 'Integration computes areas, volumes, arc lengths, and physical quantities like work and pressure.',
      keyFacts: [
        'Area between curves: ∫_a^b [f(x)−g(x)] dx  (f ≥ g on [a,b])',
        'Disk/washer volume: V = π∫_a^b [R(x)²−r(x)²] dx',
        'Shell method: V = 2π∫_a^b x·f(x) dx',
        'Arc length: L = ∫_a^b √(1 + [f\'(x)]²) dx',
        'Work: W = ∫_a^b F(x) dx',
      ],
    },
    'Sequences': {
      summary: 'A sequence is a function on positive integers. Its limit describes long-run behavior.',
      keyFacts: [
        'Monotone Convergence Theorem: bounded + monotone → converges',
        'Squeeze theorem applies to sequences too',
        'Geometric: aₙ = ar^(n−1) converges to 0 iff |r| < 1',
        'lim(n→∞) n^(1/n) = 1;  lim (1 + 1/n)ⁿ = e',
        'A sequence {aₙ} converges to L iff for every ε > 0 there exists N such that n > N → |aₙ−L| < ε',
      ],
    },
    'Infinite Series': {
      summary: 'An infinite series is the sum of infinitely many terms. Convergence tests determine whether the sum is finite.',
      keyFacts: [
        'Geometric: Σ arⁿ converges to a/(1−r) iff |r| < 1',
        'p-series: Σ 1/nᵖ converges iff p > 1',
        'Divergence test: if lim aₙ ≠ 0, the series diverges (but lim aₙ = 0 is NOT sufficient for convergence)',
        'Ratio test: lim |a_{n+1}/aₙ| < 1 → converges;  > 1 → diverges;  = 1 → inconclusive',
        'Alternating series test: Σ(−1)ⁿ bₙ converges if bₙ is decreasing → 0',
      ],
    },
    'Power Series': {
      summary: 'A power series is an "infinite polynomial" that converges on an interval, representing functions exactly.',
      keyFacts: [
        'Σ cₙ(x−a)ⁿ converges for |x−a| < R  (R = radius of convergence)',
        'Find R using ratio test: R = lim |cₙ/c_{n+1}|',
        'Term-by-term differentiation and integration valid inside the interval of convergence',
        'eˣ = Σxⁿ/n!;  sin x = Σ(−1)ⁿx^(2n+1)/(2n+1)!;  cos x = Σ(−1)ⁿx^(2n)/(2n)!',
        '1/(1−x) = Σxⁿ  for |x| < 1  (starting template for many series)',
      ],
    },
    'Parametric Equations & Polar Curves': {
      summary: 'Parametric equations describe curves via a parameter t. Polar coordinates describe points by (r, θ) instead of (x, y).',
      keyFacts: [
        'Slope of parametric curve: dy/dx = (dy/dt)/(dx/dt)',
        'Arc length (parametric): L = ∫√[(dx/dt)² + (dy/dt)²] dt',
        'Polar ↔ Cartesian: x = r cosθ, y = r sinθ; r² = x² + y²',
        'Area in polar: A = ½∫_α^β r² dθ',
        'Arc length in polar: L = ∫_α^β √(r² + (dr/dθ)²) dθ',
      ],
    },
  },

  calc3: {
    'Vectors & 3D Analytic Geometry': {
      summary: '3D vectors and analytic geometry set up the coordinate framework for multivariable calculus.',
      keyFacts: [
        'Dot product: a·b = a₁b₁+a₂b₂+a₃b₃ = |a||b|cosθ',
        'Cross product magnitude: |a×b| = |a||b|sinθ  (gives area of parallelogram)',
        'Equation of plane: n·(r−r₀) = 0  where n is the normal vector',
        'Distance from point P to plane ax+by+cz=d:  |aP+bP+cP−d| / √(a²+b²+c²)',
        'Quadric surfaces: ellipsoid, hyperboloid, paraboloid (recognize from equation)',
      ],
    },
    'Vector-Valued Functions': {
      summary: 'Vector-valued functions trace curves in space; their derivatives give velocity and curvature information.',
      keyFacts: [
        'r\'(t) = velocity vector  (tangent to curve)',
        'Speed = |r\'(t)|;  arc length = ∫_a^b |r\'(t)| dt',
        'Unit tangent: T(t) = r\'(t)/|r\'(t)|',
        'Curvature: κ = |T\'(t)| / |r\'(t)|',
        'Normal vector N(t) = T\'(t)/|T\'(t)| points toward center of curvature',
      ],
    },
    'Partial Derivatives': {
      summary: 'Partial derivatives measure rates of change in one variable while holding others constant.',
      keyFacts: [
        '∂f/∂x: differentiate with respect to x treating y (and other variables) as constants',
        'Gradient: ∇f = (∂f/∂x, ∂f/∂y) — direction of steepest increase',
        'Directional derivative: D_u f = ∇f · u  (u is a unit vector)',
        'Critical point: ∇f = 0; classify using second-derivative test (discriminant D = f_{xx}f_{yy} − f_{xy}²)',
        'D > 0, f_{xx} > 0 → local min; D > 0, f_{xx} < 0 → local max; D < 0 → saddle point',
      ],
    },
    'Multiple Integrals': {
      summary: 'Multiple integrals extend definite integration to two and three dimensions, computing volumes, masses, and more.',
      keyFacts: [
        'Fubini\'s theorem: ∬_R f dA = ∫_a^b (∫_c^d f dy) dx  (for rectangles)',
        'Switching order of integration: redraw the region and rewrite limits',
        'Change to polar: x = r cosθ, y = r sinθ, dA = r dr dθ',
        'Jacobian: change of variables gives |∂(x,y)/∂(u,v)| as the scale factor',
        'Triple integral in spherical: dV = ρ² sinφ dρ dφ dθ',
      ],
    },
    'Vector Calculus': {
      summary: 'Vector calculus connects integration over curves and surfaces to derivatives via Green\'s, Stokes\', and Divergence theorems.',
      keyFacts: [
        'FTC for line integrals: ∫_C ∇f · dr = f(end) − f(start)  (conservative field)',
        'Green\'s theorem: ∮_C P dx + Q dy = ∬_D (∂Q/∂x − ∂P/∂y) dA',
        'Stokes\' theorem: ∯_S (∇×F) · dS = ∮_C F · dr',
        'Divergence theorem: ∯_S F · dS = ∭_V (∇·F) dV',
        'Curl = ∇×F (measures rotation); Divergence = ∇·F (measures expansion)',
      ],
    },
  },

  'linear-algebra': {
    'Systems of Linear Equations': {
      summary: 'Linear systems are solved by row reduction (Gaussian elimination) to row echelon form.',
      keyFacts: [
        'Three row operations: swap rows; scale a row; add a multiple of one row to another',
        'REF: leading entry in each row is 1, zeros below',
        'RREF: additionally zeros above each leading 1',
        'Free variables (from zero rows) give infinitely many solutions',
        'Consistent iff rank of augmented matrix = rank of coefficient matrix',
      ],
    },
    'Matrix Algebra': {
      summary: 'Matrix operations extend arithmetic to rectangular arrays of numbers with applications across science and engineering.',
      keyFacts: [
        'Matrix multiplication: (AB)_{ij} = row i of A · column j of B',
        'AB ≠ BA in general (non-commutative)',
        '(AB)ᵀ = BᵀAᵀ;  (AB)⁻¹ = B⁻¹A⁻¹',
        'AA⁻¹ = A⁻¹A = I  (identity)',
        'LU factorization: A = LU  (L lower triangular, U upper triangular) — efficient for solving multiple systems',
      ],
    },
    'Determinants': {
      summary: 'The determinant is a scalar that encodes invertibility and geometric scaling of a linear transformation.',
      keyFacts: [
        'det([[a,b],[c,d]]) = ad − bc',
        'det(A) ≠ 0 ⟺ A is invertible',
        'Row swap multiplies det by −1; scaling row by k multiplies det by k',
        'det(AB) = det(A)·det(B)',
        'Geometric meaning: |det(A)| = scale factor for areas (2D) or volumes (3D)',
      ],
    },
    'Vector Spaces': {
      summary: 'A vector space is a set with vector addition and scalar multiplication satisfying 8 axioms. Subspaces are closed subsets.',
      keyFacts: [
        'Subspace test: contains zero, closed under addition and scalar multiplication',
        'Span of S = all linear combinations of vectors in S',
        'Linearly independent: no vector is a linear combination of the others',
        'Basis: a linearly independent spanning set; all bases have the same size (dimension)',
        'Rank-Nullity: rank(A) + nullity(A) = number of columns of A',
      ],
    },
    'Linear Transformations': {
      summary: 'A linear transformation preserves vector addition and scalar multiplication. It is completely determined by its matrix.',
      keyFacts: [
        'T is linear iff T(au + bv) = aT(u) + bT(v)',
        'Standard matrix [T] has columns T(e₁), T(e₂), …',
        'ker T = null space of [T];  im T = column space of [T]',
        'T injective ⟺ ker T = {0} ⟺ rank = n (# columns)',
        'Similar matrices A, B = P⁻¹AP represent the same transformation in different bases',
      ],
    },
    'Eigenvalues & Eigenvectors': {
      summary: 'Eigenvalues and eigenvectors reveal the intrinsic stretching directions and factors of a linear transformation.',
      keyFacts: [
        'Ax = λx defines eigenvalue λ with eigenvector x ≠ 0',
        'Find eigenvalues: solve det(A − λI) = 0  (characteristic equation)',
        'Eigenspace for λ: null space of (A − λI)',
        'A is diagonalizable if it has n linearly independent eigenvectors: A = PDP⁻¹',
        'Aⁿ = PDⁿP⁻¹  (efficient computation of matrix powers)',
      ],
    },
    'Orthogonality': {
      summary: 'Orthogonality generalizes perpendicularity. Orthonormal bases simplify computations enormously.',
      keyFacts: [
        'u·v = 0 ⟺ u and v are orthogonal',
        'Gram-Schmidt: transforms any basis into an orthonormal basis',
        'QR factorization: A = QR  (Q orthonormal columns, R upper triangular)',
        'Least-squares solution: AᵀAx = Aᵀb  (minimizes |Ax − b|²)',
        'SVD: A = UΣVᵀ  — the most useful factorization in numerical linear algebra',
      ],
    },
  },

  'diff-eq': {
    'First-Order ODEs': {
      summary: 'First-order ODEs relate a function to its first derivative. Many model real-world rates of change.',
      keyFacts: [
        'Separable: dy/dx = f(x)g(y) → ∫dy/g(y) = ∫f(x)dx',
        'Linear: dy/dx + P(x)y = Q(x);  integrating factor μ = e^(∫P dx)',
        'General solution = homogeneous solution + particular solution',
        'Logistic growth: dy/dt = ky(1−y/L) → bounded by carrying capacity L',
        'Equilibrium: where dy/dt = 0; stable if nearby solutions approach it',
      ],
    },
    'Higher-Order Linear ODEs': {
      summary: 'Higher-order linear ODEs model oscillations, vibrations, and other phenomena with characteristic exponential solutions.',
      keyFacts: [
        'Characteristic equation: replace y⁽ⁿ⁾ with rⁿ and solve the polynomial',
        'Distinct real roots r₁, r₂: yₕ = C₁e^(r₁x) + C₂e^(r₂x)',
        'Repeated root r: yₕ = (C₁ + C₂x)e^(rx)',
        'Complex roots α±βi: yₕ = e^(αx)(C₁ cos βx + C₂ sin βx)',
        'Undetermined coefficients: guess the form of yₚ based on the right-hand side',
      ],
    },
    'Systems of ODEs': {
      summary: 'Systems of ODEs model interacting quantities. The eigenvalue method diagonalizes the system.',
      keyFacts: [
        'x\' = Ax: general solution x = c₁v₁e^(λ₁t) + c₂v₂e^(λ₂t)  (eigenvectors v₁, v₂)',
        'Phase portrait: draws solution curves in the phase plane',
        'Stable node (λ₁ < λ₂ < 0), unstable node (both > 0), saddle (opposite signs)',
        'Spiral sink (Re(λ) < 0, Im(λ) ≠ 0), spiral source (Re(λ) > 0)',
        'Center (purely imaginary λ): closed elliptical orbits',
      ],
    },
    'Laplace Transforms': {
      summary: 'The Laplace transform converts ODEs into algebraic equations, making initial value problems systematic.',
      keyFacts: [
        'L{f} = ∫_0^∞ e^(−st) f(t) dt',
        'L{1} = 1/s;  L{eᵃᵗ} = 1/(s−a);  L{tⁿ} = n!/s^(n+1)',
        'L{sin bt} = b/(s²+b²);  L{cos bt} = s/(s²+b²)',
        'Derivative rule: L{f\'} = sF(s) − f(0)',
        'Inverse transform: use partial fractions then table look-up',
      ],
    },
    'Series Solutions & Special Equations': {
      summary: 'When coefficients are not constant, power series methods yield solutions as infinite polynomials.',
      keyFacts: [
        'Assume y = Σaₙxⁿ, substitute, and match coefficients',
        'Regular singular point: Frobenius method works (assumes y = xʳ Σaₙxⁿ)',
        'Bessel\'s equation: x²y\'\' + xy\' + (x²−n²)y = 0;  solutions Jₙ(x), Yₙ(x)',
        'Bessel functions appear in cylindrical symmetry problems',
        "Legendre's equation: (1−x²)y'' − 2xy' + n(n+1)y = 0;  solutions Pₙ(x)",
      ],
    },
  },

  'real-analysis': {
    'The Real Number System': {
      summary: 'The real numbers are a complete ordered field — the completeness axiom is what separates ℝ from ℚ.',
      keyFacts: [
        'Completeness (LUB property): every nonempty set bounded above has a least upper bound (supremum) in ℝ',
        'Archimedean property: for any x ∈ ℝ there exists n ∈ ℕ with n > x',
        'Density of ℚ: between any two reals there is a rational',
        'ℝ is uncountable (Cantor\'s diagonalization); ℚ is countable',
        'Supremum (sup): least upper bound; Infimum (inf): greatest lower bound',
      ],
    },
    'Sequences & Convergence': {
      summary: 'A sequence converges if its terms become arbitrarily close to a fixed limit.',
      keyFacts: [
        'Definition: aₙ → L iff for every ε > 0, ∃N such that n > N → |aₙ − L| < ε',
        'Every convergent sequence is Cauchy; in ℝ, every Cauchy sequence converges',
        'Monotone Convergence Theorem: bounded monotone sequence converges',
        'Bolzano-Weierstrass: every bounded sequence has a convergent subsequence',
        'lim sup and lim inf always exist for any bounded sequence',
      ],
    },
    'Topology of R': {
      summary: 'Open and closed sets define the structure of ℝ and carry over to abstract spaces.',
      keyFacts: [
        'Open set: every point has an ε-neighborhood entirely within the set',
        'Closed set: contains all its limit points; complement of an open set',
        'Compact set in ℝ: closed and bounded (Heine-Borel theorem)',
        'Connected set: cannot be split into two disjoint nonempty open sets; in ℝ these are intervals',
        'Perfect set: closed with no isolated points (e.g., the Cantor set)',
      ],
    },
    'Continuity': {
      summary: 'Continuity formalizes the idea that small input changes produce small output changes.',
      keyFacts: [
        'ε-δ definition: f is continuous at a iff for every ε > 0 ∃δ > 0: |x−a|<δ → |f(x)−f(a)|<ε',
        'Sequential: f continuous at a iff xₙ → a implies f(xₙ) → f(a)',
        'Uniform continuity: one δ works for all points simultaneously',
        'Continuous on compact set → uniformly continuous (Heine-Cantor theorem)',
        'EVT: continuous f on [a,b] achieves its max and min',
      ],
    },
    'Differentiation': {
      summary: 'Differentiation is defined rigorously via limits. The Mean Value Theorem has profound consequences.',
      keyFacts: [
        'f\'(a) = lim(x→a) [f(x)−f(a)]/(x−a)',
        'Differentiable ⟹ continuous (converse fails: |x| is continuous but not differentiable at 0)',
        'MVT: if f continuous on [a,b] and differentiable on (a,b), then f\'(c) = [f(b)−f(a)]/(b−a) for some c',
        'Rolle\'s theorem: f(a)=f(b) → f\'(c)=0 for some c ∈ (a,b)',
        "Taylor's theorem with Lagrange remainder: f(x) = Tₙ(x) + Rₙ(x), where Rₙ = f^(n+1)(c)(x−a)^(n+1)/(n+1)!",
      ],
    },
    'The Riemann Integral': {
      summary: 'The Riemann integral is defined as the limit of sums of rectangular areas under a curve.',
      keyFacts: [
        'Lower sum L(f,P) ≤ ∫_a^b f ≤ Upper sum U(f,P) for any partition P',
        'f is Riemann integrable iff for every ε > 0, there exists partition with U−L < ε',
        'Continuous functions and monotone functions are Riemann integrable',
        'FTC (rigorous): if f is continuous, F(x) = ∫_a^x f(t)dt is differentiable and F\'(x)=f(x)',
        'Lebesgue criterion: f is Riemann integrable iff it is bounded and continuous almost everywhere',
      ],
    },
  },

  'abstract-algebra': {
    'Group Theory': {
      summary: 'A group is a set with an associative binary operation, an identity, and inverses. Groups capture the essence of symmetry.',
      keyFacts: [
        'Group axioms: closure, associativity, identity (ea=ae=a), inverse (aa⁻¹=e)',
        "Lagrange's theorem: |H| divides |G| for any subgroup H ≤ G",
        'Cyclic group ⟨g⟩: all powers of generator g; ℤₙ is cyclic of order n',
        'Isomorphism: bijective group homomorphism; preserves group structure',
        'First isomorphism theorem: G/ker φ ≅ im φ  (for homomorphism φ: G → H)',
      ],
    },
    'Ring Theory': {
      summary: 'A ring has two operations (addition and multiplication). Rings generalize integers and polynomials.',
      keyFacts: [
        'Ring axioms: (R,+) is abelian group; multiplication is associative; distributive laws hold',
        'Ideal I ≤ R: closed under addition and absorbs ring multiplication (rI ⊆ I)',
        'R/I is a quotient ring; elements are cosets a + I',
        'Integral domain: commutative ring with no zero divisors',
        'PID: every ideal is principal (generated by one element); ℤ and F[x] are PIDs',
      ],
    },
    'Field Theory': {
      summary: 'Fields are rings where every nonzero element has a multiplicative inverse. Field extensions encode the arithmetic of algebraic numbers.',
      keyFacts: [
        'Field: commutative ring in which every nonzero element is a unit',
        'Extension F ⊆ K has degree [K:F] = dimF K  (vector space dimension)',
        'α is algebraic over F if it satisfies a polynomial p(α) = 0 with p ∈ F[x]',
        'Splitting field of p: smallest extension containing all roots of p',
        'Galois group Gal(K/F): automorphisms of K fixing F; |Gal(K/F)| = [K:F] for Galois extensions',
      ],
    },
  },

  'discrete-math': {
    'Logic & Proof Techniques': {
      summary: 'Mathematical logic provides the formal language and deduction rules for rigorous proof.',
      keyFacts: [
        'Contrapositive: p → q is equivalent to ¬q → ¬p',
        'Contradiction: assume ¬p and derive a contradiction, concluding p',
        'Induction: prove P(1) (base), then P(k) → P(k+1) (step)',
        'Strong induction: assume P(j) for all j ≤ k in the step',
        'De Morgan\'s laws: ¬(p∧q) ≡ ¬p∨¬q;  ¬(p∨q) ≡ ¬p∧¬q',
      ],
    },
    'Set Theory': {
      summary: 'Set theory is the foundation of mathematics, providing the language to define all mathematical objects.',
      keyFacts: [
        '|A ∪ B| = |A| + |B| − |A ∩ B|  (inclusion-exclusion)',
        'Power set P(A): set of all subsets; |P(A)| = 2^|A|',
        'Cantor: |P(A)| > |A| for any set (diagonalization)',
        'Countably infinite: bijection with ℕ; ℝ is uncountable',
        'Function f: A → B is injective if f(a)=f(b) → a=b; surjective if every b has a preimage',
      ],
    },
    'Combinatorics': {
      summary: 'Combinatorics counts arrangements and selections. Generating functions and recurrences solve complex counting problems.',
      keyFacts: [
        'Permutations: P(n,r) = n!/(n−r)!  (ordered selection)',
        'Combinations: C(n,r) = n!/[r!(n−r)!]  (unordered)',
        'Pigeonhole: n+1 items in n boxes → some box has ≥ 2',
        'Inclusion-exclusion: |A₁∪…∪Aₙ| = Σ|Aᵢ| − Σ|Aᵢ∩Aⱼ| + …',
        'Catalan numbers: Cₙ = C(2n,n)/(n+1);  count binary trees, bracket arrangements, etc.',
      ],
    },
    'Graph Theory': {
      summary: 'Graph theory studies networks of vertices and edges, with applications in computer science, logistics, and social networks.',
      keyFacts: [
        'Handshaking lemma: sum of all degrees = 2|E|',
        'Tree on n vertices has exactly n−1 edges',
        'Eulerian circuit exists iff every vertex has even degree (connected graph)',
        "Planar graph: V − E + F = 2 (Euler's formula)",
        'Chromatic number χ(G): minimum colors to color vertices so no adjacent pair shares a color',
      ],
    },
    'Number Theory': {
      summary: 'Number theory studies integers, primes, and modular arithmetic — the mathematics underlying cryptography.',
      keyFacts: [
        'Euclidean algorithm: gcd(a,b) = gcd(b, a mod b);  extended version finds s,t with as+bt=gcd',
        'Fundamental theorem of arithmetic: unique prime factorization',
        'Fermat\'s little theorem: aᵖ⁻¹ ≡ 1 (mod p)  for prime p with p∤a',
        'Euler\'s theorem: a^φ(n) ≡ 1 (mod n)  for gcd(a,n)=1',
        'RSA: encrypt m as mᵉ mod n; decrypt with mᵈ mod n where ed ≡ 1 (mod φ(n))',
      ],
    },
  },

  probability: {
    'Probability Spaces': {
      summary: 'A probability space (Ω, ℱ, P) formally defines outcomes, events, and their probabilities.',
      keyFacts: [
        'Kolmogorov axioms: P(Ω)=1; P(A)≥0; countable additivity for disjoint events',
        'P(Aᶜ) = 1 − P(A);  P(∅) = 0',
        'Conditional: P(A|B) = P(A∩B)/P(B)  for P(B) > 0',
        'Independence: P(A∩B) = P(A)·P(B)',
        "Bayes' theorem: P(A|B) = P(B|A)·P(A) / P(B)",
      ],
    },
    'Random Variables': {
      summary: 'A random variable maps outcomes to numbers, enabling quantitative analysis of random phenomena.',
      keyFacts: [
        'PMF (discrete): p(x) = P(X=x) ≥ 0;  Σ p(x) = 1',
        'PDF (continuous): f(x) ≥ 0;  ∫f(x)dx = 1;  P(a≤X≤b) = ∫_a^b f(x)dx',
        'CDF: F(x) = P(X ≤ x)',
        'Joint density f(x,y): marginal fₓ(x) = ∫f(x,y)dy',
        'Independence: f(x,y) = fₓ(x)·fᵧ(y)',
      ],
    },
    'Expectation & Moments': {
      summary: 'Expected value is the probability-weighted average. Variance measures spread around the mean.',
      keyFacts: [
        'E[X] = Σ x·p(x)  or  ∫x·f(x)dx',
        'E[aX+bY] = aE[X] + bE[Y]  (linearity — always holds)',
        'Var[X] = E[X²] − (E[X])²',
        'Cov(X,Y) = E[XY] − E[X]E[Y];  ρ = Cov/(σₓσᵧ) ∈ [−1,1]',
        'MGF: M(t) = E[eᵗˣ];  M^(n)(0) = E[Xⁿ]  (nth moment)',
      ],
    },
    'Named Distributions': {
      summary: 'Named distributions model recurring random phenomena and have known formulas for probabilities and moments.',
      keyFacts: [
        'Binomial B(n,p): P(X=k) = C(n,k)pᵏ(1−p)ⁿ⁻ᵏ;  E=np;  Var=np(1−p)',
        'Poisson(λ): P(X=k) = e^(−λ)λᵏ/k!;  E=Var=λ  (rare events)',
        'Exponential(λ): f(x)=λe^(−λx);  E=1/λ;  memoryless property',
        'Normal N(μ,σ²): symmetric bell; 68-95-99.7 rule',
        'Chi-squared χ²(k): sum of k independent standard normals squared; used in tests',
      ],
    },
    'Limit Theorems': {
      summary: 'Limit theorems describe the behavior of sums and averages of many random variables.',
      keyFacts: [
        'WLLN: X̄ₙ → μ in probability as n → ∞',
        'SLLN: X̄ₙ → μ almost surely',
        'CLT: √n(X̄ₙ − μ)/σ → N(0,1) in distribution',
        'Chebyshev: P(|X−μ| ≥ kσ) ≤ 1/k²  (any distribution)',
        'Delta method: if √n(Xₙ−μ) → N(0,σ²), then √n[g(Xₙ)−g(μ)] → N(0, σ²[g\'(μ)]²)',
      ],
    },
  },

  'numerical-methods': {
    'Root Finding': {
      summary: 'Root-finding algorithms iteratively narrow down the location of a zero of f(x).',
      keyFacts: [
        'Bisection: halve the interval each step; guaranteed to converge; rate: linear',
        'Newton-Raphson: xₙ₊₁ = xₙ − f(xₙ)/f\'(xₙ);  quadratic convergence near simple roots',
        'Secant: like Newton but approximates derivative using two previous points',
        'Fixed-point: xₙ₊₁ = g(xₙ) converges if |g\'(x*)| < 1 near the fixed point x*',
        'Convergence order p: error eₙ₊₁ ≈ C·eₙᵖ  (p=1 linear, p=2 quadratic)',
      ],
    },
    'Numerical Differentiation & Integration': {
      summary: 'Numerical methods approximate derivatives and integrals when analytic formulas are unavailable.',
      keyFacts: [
        'Forward difference: f\'(x) ≈ [f(x+h)−f(x)]/h  (error O(h))',
        'Central difference: f\'(x) ≈ [f(x+h)−f(x−h)]/(2h)  (error O(h²) — better)',
        'Trapezoidal rule: ∫_a^b f dx ≈ (h/2)[f(a)+2f(x₁)+…+2f(xₙ₋₁)+f(b)]',
        "Simpson's 1/3 rule: ∫ ≈ (h/3)[f₀+4f₁+2f₂+4f₃+…+f_n]  (error O(h⁴))",
        'Gaussian quadrature: strategically chosen nodes give higher accuracy for fewer evaluations',
      ],
    },
    'Numerical Linear Algebra': {
      summary: 'Numerical methods solve large linear systems efficiently and accurately on computers.',
      keyFacts: [
        'Gaussian elimination with partial pivoting: stable algorithm; O(n³) operations',
        'LU decomposition: factor once, solve Ly=b then Ux=y for multiple right-hand sides',
        'Jacobi iteration: xₖ₊₁ = D⁻¹(b − (L+U)xₖ); converges if A strictly diagonally dominant',
        'Condition number κ(A) = ||A||·||A⁻¹||; large κ → solution sensitive to small perturbations',
        'Power method: repeatedly multiply Ax/||Ax|| to find dominant eigenvector',
      ],
    },
    'Numerical ODEs': {
      summary: 'Numerical ODE solvers step forward in time, approximating the continuous solution at discrete points.',
      keyFacts: [
        "Euler's method: yₙ₊₁ = yₙ + h·f(tₙ, yₙ)  (local error O(h²), global O(h))",
        "Heun's method: predict with Euler, correct with trapezoid average; order 2",
        'RK4: weighted average of 4 slope estimates; order 4 — the workhorse ODE solver',
        'Stiffness: rapid variation in solution — requires implicit methods (e.g., backward Euler)',
        'Stability: numerical solution shouldn\'t blow up for problems whose exact solution doesn\'t',
      ],
    },
    'Interpolation & Approximation': {
      summary: 'Interpolation fits a function exactly through given data points; approximation finds the best-fit function.',
      keyFacts: [
        'Lagrange interpolant: L(x) = Σ yᵢ Πⱼ≠ᵢ (x−xⱼ)/(xᵢ−xⱼ)',
        'n+1 points determine a unique polynomial of degree ≤ n',
        'Cubic splines: piecewise cubics with continuous first and second derivatives — smooth interpolation',
        'Runge\'s phenomenon: high-degree polynomial interpolation on equally-spaced nodes can oscillate wildly',
        'Least squares: minimize Σ[f(xᵢ)−yᵢ]² — doesn\'t require passing through all points',
      ],
    },
  },
};

import React from 'react';

function VineLeft({ opacity = 0.15, color = '#2D7D52' }) {
  return (
    <svg
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 0,
      }}
      width="220"
      height="420"
      viewBox="0 0 220 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main stem */}
      <path
        d="M30 420 C35 380 20 350 40 320 C60 290 25 260 45 230 C65 200 30 170 50 140 C70 110 40 80 60 50"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
        opacity={opacity}
      />

      {/* Branch 1 */}
      <path
        d="M38 340 C60 330 80 340 95 325"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity={opacity}
      />
      {/* Leaf on branch 1 */}
      <ellipse cx="95" cy="322" rx="14" ry="8" transform="rotate(-30 95 322)" fill={color} opacity={opacity * 1.4} />
      <ellipse cx="108" cy="315" rx="10" ry="6" transform="rotate(-45 108 315)" fill={color} opacity={opacity * 1.2} />

      {/* Branch 2 */}
      <path
        d="M43 285 C20 270 10 255 15 238"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity={opacity}
      />
      {/* Leaf on branch 2 */}
      <ellipse cx="13" cy="232" rx="13" ry="7" transform="rotate(20 13 232)" fill={color} opacity={opacity * 1.4} />
      <ellipse cx="5" cy="222" rx="9" ry="5" transform="rotate(10 5 222)" fill={color} opacity={opacity * 1.2} />

      {/* Branch 3 */}
      <path
        d="M48 220 C70 210 85 215 100 200"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity={opacity}
      />
      {/* Leaf on branch 3 */}
      <ellipse cx="102" cy="197" rx="12" ry="7" transform="rotate(-40 102 197)" fill={color} opacity={opacity * 1.4} />
      <ellipse cx="114" cy="190" rx="8" ry="5" transform="rotate(-55 114 190)" fill={color} opacity={opacity * 1.2} />

      {/* Branch 4 */}
      <path
        d="M50 165 C28 155 15 140 18 122"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity={opacity}
      />
      {/* Leaf on branch 4 */}
      <ellipse cx="17" cy="116" rx="11" ry="6" transform="rotate(15 17 116)" fill={color} opacity={opacity * 1.4} />

      {/* Branch 5 — near top */}
      <path
        d="M55 110 C75 98 88 102 100 88"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        opacity={opacity}
      />
      <ellipse cx="102" cy="85" rx="11" ry="6" transform="rotate(-35 102 85)" fill={color} opacity={opacity * 1.4} />
      <ellipse cx="112" cy="78" rx="7" ry="4" transform="rotate(-50 112 78)" fill={color} opacity={opacity} />

      {/* Small curling tendrils */}
      <path
        d="M42 300 C50 295 52 288 48 283"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity={opacity * 0.8}
      />
      <path
        d="M46 240 C38 234 36 226 42 220"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity={opacity * 0.8}
      />
      <path
        d="M52 178 C60 172 62 164 57 158"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity={opacity * 0.8}
      />

      {/* Small scattered leaves along stem */}
      <ellipse cx="36" cy="390" rx="8" ry="5" transform="rotate(-10 36 390)" fill={color} opacity={opacity * 1.2} />
      <ellipse cx="28" cy="360" rx="7" ry="4" transform="rotate(15 28 360)" fill={color} opacity={opacity} />
    </svg>
  );
}

function VineRight({ opacity = 0.15, color = '#2D7D52' }) {
  return (
    <svg
      style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        pointerEvents: 'none',
        zIndex: 0,
      }}
      width="220"
      height="420"
      viewBox="0 0 220 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main stem — mirrored */}
      <path
        d="M190 420 C185 380 200 350 180 320 C160 290 195 260 175 230 C155 200 190 170 170 140 C150 110 180 80 160 50"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
        opacity={opacity}
      />

      {/* Branch 1 */}
      <path
        d="M182 340 C160 330 140 340 125 325"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity={opacity}
      />
      <ellipse cx="125" cy="322" rx="14" ry="8" transform="rotate(30 125 322)" fill={color} opacity={opacity * 1.4} />
      <ellipse cx="112" cy="315" rx="10" ry="6" transform="rotate(45 112 315)" fill={color} opacity={opacity * 1.2} />

      {/* Branch 2 */}
      <path
        d="M177 285 C200 270 210 255 205 238"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity={opacity}
      />
      <ellipse cx="207" cy="232" rx="13" ry="7" transform="rotate(-20 207 232)" fill={color} opacity={opacity * 1.4} />
      <ellipse cx="215" cy="222" rx="9" ry="5" transform="rotate(-10 215 222)" fill={color} opacity={opacity * 1.2} />

      {/* Branch 3 */}
      <path
        d="M172 220 C150 210 135 215 120 200"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity={opacity}
      />
      <ellipse cx="118" cy="197" rx="12" ry="7" transform="rotate(40 118 197)" fill={color} opacity={opacity * 1.4} />
      <ellipse cx="106" cy="190" rx="8" ry="5" transform="rotate(55 106 190)" fill={color} opacity={opacity * 1.2} />

      {/* Branch 4 */}
      <path
        d="M170 165 C192 155 205 140 202 122"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity={opacity}
      />
      <ellipse cx="203" cy="116" rx="11" ry="6" transform="rotate(-15 203 116)" fill={color} opacity={opacity * 1.4} />

      {/* Branch 5 */}
      <path
        d="M165 110 C145 98 132 102 120 88"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        opacity={opacity}
      />
      <ellipse cx="118" cy="85" rx="11" ry="6" transform="rotate(35 118 85)" fill={color} opacity={opacity * 1.4} />
      <ellipse cx="108" cy="78" rx="7" ry="4" transform="rotate(50 108 78)" fill={color} opacity={opacity} />

      {/* Tendrils */}
      <path
        d="M178 300 C170 295 168 288 172 283"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity={opacity * 0.8}
      />
      <path
        d="M174 240 C182 234 184 226 178 220"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity={opacity * 0.8}
      />
      <path
        d="M168 178 C160 172 158 164 163 158"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity={opacity * 0.8}
      />

      {/* Small scattered leaves */}
      <ellipse cx="184" cy="390" rx="8" ry="5" transform="rotate(10 184 390)" fill={color} opacity={opacity * 1.2} />
      <ellipse cx="192" cy="360" rx="7" ry="4" transform="rotate(-15 192 360)" fill={color} opacity={opacity} />
    </svg>
  );
}

export { VineLeft, VineRight };
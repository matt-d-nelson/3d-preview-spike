function FishBody(props) {
  return (
    <div>
      <p>fish body</p>
      <svg
        width="360"
        height="504"
        viewBox="0 0 95.249998 133.35"
        version="1.1"
        id="svg535"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* BODY SHADE LEFT GRADIENT */}
          <radialGradient
            id="bodyShadeGrad"
            cx="100%"
            cy="80%"
            r="100%"
            fx="100%"
            fy="60%"
          >
            <stop
              offset="20%"
              stopColor={props.bodyShadeColor}
              stopOpacity="1"
            />
            <stop
              offset="100%"
              stopColor={props.bodyShadeColor}
              stopOpacity="0"
            />
          </radialGradient>
          {/* BODY LEFT GRADIENT */}
          <radialGradient
            id="bodyGrad"
            cx="80%"
            cy="70%"
            r="70%"
            fx="100%"
            fy="70%"
          >
            <stop offset="70%" stopColor={props.bodyColor} stopOpacity="1" />
            {/* <stop offset="90%" stopColor={props.bodyColor} stopOpacity="0.9" /> */}
            <stop
              offset="100%"
              stopColor={props.bodyShadeColor}
              stopOpacity="1"
            />
          </radialGradient>
          {/* FIN LEFT GRADIENT */}
          <radialGradient
            id="finGrad"
            cx="80%"
            cy="30%"
            r="70%"
            fx="100%"
            fy="30%"
          >
            <stop offset="0%" stopColor={props.finColor} stopOpacity="0" />
            <stop offset="90%" stopColor={props.finColor} stopOpacity="1" />
          </radialGradient>
          {/* DORSAL GRADIENT */}
          <radialGradient
            id="dorsalGrad"
            cx="100%"
            cy="70%"
            r="70%"
            fx="100%"
            fy="40%"
          >
            <stop offset="0%" stopColor={props.dorsalColor} stopOpacity="1" />
            <stop
              offset="100%"
              stopColor={props.dorsalColor}
              stopOpacity="0.5"
            />
          </radialGradient>
        </defs>
        <g id="layer1" style={{ display: "inline" }}>
          {/* BODY BACKGROUND LEFT*/}
          <path
            style={{
              display: "inline",
              fill: props.bodyColor,
              stroke: "#000000",
              strokeWidth: "0",
            }}
            d="M 25.107464,78.88948 C 24.043634,78.705484 18.705373,76.191712 18.145615,75.086095 17.579107,73.967143 17.878919,49.096053 18.304386,45.384282 18.935377,39.879531 30.948452,18.60488 37.99547,8.1770251 c 0.284953,-0.4216627 10.629603,0.03992 10.629603,0.03992 l 0.03032,70.6890689 c 0,0 -22.483904,0.167494 -23.547931,-0.01654 z"
            id="path594"
          />
          {/* FIN LEFT */}
          <path
            style={{
              fill: "url(#finGrad)",
              stroke: "#000000",
              strokeWidth: "0",
            }}
            d="m 48.623684,50.57305 c 0,0 -12.728466,-0.05882 -16.371093,1.422133 -6.209873,2.524691 -10.9054,8.296915 -13.561273,13.334404 -1.148469,2.178344 -1.218068,6.223511 -0.727604,8.731247 0.2303,1.177515 4.291658,4.47288 7.14375,4.828646 2.052488,0.256024 23.51622,-0.171384 23.51622,-0.171384 z"
            id="path970"
          />
          {/* BODY SHADE LEFT */}
          <path
            style={{
              fill: "url(#bodyShadeGrad)",
              stroke: "#000000",
              strokeWidth: "0",
            }}
            d="m 48.392581,8.1658921 c 0,0 -5.913916,-0.3880497 -6.135655,-0.01509 C 35.69168,36.019804 25.703264,60.580043 33.519154,74.426892 c 3.501649,6.20362 15.070081,4.396488 15.070081,4.396488 z"
            id="path1028"
          />
          {/* BODY FGRD LEFT */}
          <path
            style={{
              //   fill: "url(#bodyGrad)",
              fill: props.bodyColor,
              stroke: "#000000",
              strokeWidth: "0",
            }}
            d="m 48.565979,78.802991 c 0,0 -10.383663,1.572819 -14.043041,-3.827439 -3.111297,-4.591438 -3.462417,-9.417733 -1.298231,-23.97861 2.175277,-14.635512 8.291674,-22.20491 11.461924,-42.8834969 0.06266,-0.4087007 3.869532,0.03307 3.869532,0.03307 z"
            id="path1031"
          />
          {/* DORSAL LEFT */}
          <path
            style={{
              fill: "url(#dorsalGrad)",
              stroke: "#000000",
              strokeWidth: "0",
            }}
            d="m 48.963542,78.919923 c 0,0 -3.083066,0.282932 -3.11035,-0.163705 C 44.409544,55.123605 47.911167,8.2471831 47.911167,8.2471831 l 1.028414,0.01225 z"
            id="path1034"
          />
        </g>
      </svg>
    </div>
  );
}

export default FishBody;

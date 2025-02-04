import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import React from "react";

interface ResponsiveIframeProps {
  src: string;
}

const ResponsiveIframe: React.FC<ResponsiveIframeProps> = ({ src }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Box ref={containerRef} sx={{ width: "100%", height: "500px", position: "relative" }}>
      <iframe
        src={src}
        width={dimensions.width}
        height={dimensions.height}
        style={{ border: "none", position: "absolute", top: 0, left: 0 }}
      />
    </Box>
  );
};

export default ResponsiveIframe;

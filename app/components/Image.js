import { useState } from "react";
import NextImage from "next/image";

function Image({src, alt, ...props}){
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    return (
        <div className={isLoaded ? "overflow-hidden max-w-32 rounded-lg xl:rounded-xl md:max-w-sm" : " overflow-hidden flex-shrink-0 rounded-lg xl:rounded-xl"}>
            
            {!isLoaded && !hasError && (
                <div className={`bg-gray-200 animate-pulse w-[120px] h-full md:w-full md:h-[calc(100vw*0.4)] md:max-h-[22rem]`}>
                    <div className="bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer" />
                </div>
            )}

              {/* Основное изображение */}
              <NextImage
            src={src}
            alt={alt}
            width={1200}
            height={1600}
            className={`object-cover transition-opacity duration-500 ${
            isLoaded && !hasError ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            {...props}
            />
             
        </div>
  );
}

export default Image;

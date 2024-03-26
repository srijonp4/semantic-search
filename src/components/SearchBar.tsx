'use client';

import { useRef, useState, useTransition, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Loader, Loader2, Search } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
export const SearchBar = () => {
  const searchParams = useSearchParams();
  const defaultQuery = searchParams.get('query') || '';
  const inputRef = useRef<HTMLInputElement>(null);
  const [isSearching, startTransition] = useTransition();
  const [query, setQuery] = useState<string>(defaultQuery);
  const router = useRouter();

  const search = () => {
    startTransition(() => {
      router.push(`/search?query=${query}`);
    });
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault();
        inputRef?.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // empty dependency array to run this effect only once

  return (
    <div className=" relative w-full flex flex-col bg-white">
      <div className="relative h-14 z-10 rounded-md">
        <Input
          disabled={isSearching}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              search();
            }
            if (e.key === 'Escape') {
              inputRef?.current?.blur();
            }
          }}
          ref={inputRef}
          className="absolute inset-0 h-full"
        />
        {/*Inset is a utility class used to set the top, right, bottom, and left properties of an absolutely positioned element simultaneously, When used in conjunction with other utility classes like absolute and h-full, as in absolute inset-0 h-full, it positions the element absolutely within its parent, covering the entire height and width of the parent element. */}
        <Button
          variant="destructive"
          className="absolute right-0 inset-y-0 h-full rounded-1-none"
          size="sm"
          onClick={(e) => {
            search();
          }}
          disabled={isSearching}
        >
          {isSearching ? (
            <Loader2 className="h-6 w-6 animate-spin" />
          ) : (
            <Search className="h-6 w-6" />
          )}
        </Button>
      </div>
    </div>
  );
};

import { ApplicationError } from '@/protocols';

export function duplicatedMovieError(): ApplicationError {
  return {
    name: 'DuplicatedMovieError',
    message: 'Filme já inserido',
  };
}
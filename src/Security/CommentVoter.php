<?php


namespace App\Security;


use App\Entity\Post;
use App\Entity\User;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\Authorization\Voter\VoterInterface;


class CommentVoter extends Voter
{
    const EDIT  = 'EDIT_COMMENT';
        protected  function supports(string $attribute, $subject)
        {
            return $attribute === self::EDIT && $subject instanceof comment;
        }

        protected function voteOnAttribute(string $attribute, $subject, TokenInterface $token)
        {
            $user = $this->getUser();
            if (!$user instanceof User || $subject instanceof Comment){
                return false;
            }
            return $user === $post->getAuthor();
        }

}
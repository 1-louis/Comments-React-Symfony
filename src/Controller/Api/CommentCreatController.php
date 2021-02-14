<?php


namespace App\Controller\Api;


use App\Entity\Comment;

use App\Entity\Post;
use App\Entity\User;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Security;

class CommentCreatController
{

    private $security;

    public function __construct(Security $security)
    {
        $this->security = $security;
    }

    public function __invoke(Comment $data): Comment
    {
        $this->security->getUser($data);

       // dd($data);
      return $data;
    }


}